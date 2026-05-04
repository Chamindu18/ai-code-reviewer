import { prisma } from '../db/prisma/client';
import { logger } from '../config/logger';
import { getPRDiff, postReview } from './github';
import { reviewDiff } from './ai';

interface PullRequestPayload {
  repository: { id: number; full_name: string; name: string; owner: { login: string } };
  pull_request: { number: number; title?: string; user: { login: string } };
  delivery?: string;
}

export async function processPullRequest(payload: PullRequestPayload) {
  const { repository, pull_request } = payload;
  const owner = repository.owner.login;
  const repo = repository.name;
  const prNumber = pull_request.number;
  const deliveryId = payload.delivery || '';   // X-GitHub-Delivery unique ID

  // 1. Upsert the repository record (create if not exists, else ignore)
  const repoRecord = await prisma.repository.upsert({
    where: { githubRepoId: repository.id },
    update: {},
    create: {
      githubRepoId: repository.id,
      fullName: repository.full_name,
    },
  });

  // 2. Create a new review record in 'processing' state
  const review = await prisma.review.create({
    data: {
      repoId: repoRecord.id,
      prNumber,
      prTitle: pull_request.title,
      prAuthor: pull_request.user.login,
      githubDelivery: deliveryId,      // stored for idempotency
      status: 'processing',
    },
  });

  try {
    // 3. Fetch the raw diff from GitHub
    const diff = await getPRDiff(owner, repo, prNumber);

    // 4. Send the diff to Claude and get back a list of validated suggestions
    const suggestions = await reviewDiff(diff);

    // 5. Save all suggestions in a single transaction (ensures consistency)
    await prisma.$transaction(async (tx) => {
      for (const s of suggestions) {
        await tx.suggestion.create({
          data: {
            reviewId: review.id,
            filePath: s.file,
            lineNumber: s.line,
            category: s.category,
            severity: s.severity,
            message: s.message,
            explanation: s.explanation,
          },
        });
      }
    });

    // 6. Post the review comment(s) to GitHub
    await postReview(owner, repo, prNumber, suggestions);

    // 7. Mark the review as completed
    await prisma.review.update({
      where: { id: review.id },
      data: { status: 'completed', completedAt: new Date() },
    });

    logger.info({ reviewId: review.id, count: suggestions.length }, 'Review completed');
  } catch (error) {
    // If anything fails, set the review to 'failed' and record the error message
    const message = error instanceof Error ? error.message : 'Unknown error';
    await prisma.review.update({
      where: { id: review.id },
      data: { status: 'failed', errorMessage: message },
    });
    logger.error({ reviewId: review.id, error: message }, 'Review failed');
    // Re‑throw so BullMQ can optionally retry
    throw error;
  }
}