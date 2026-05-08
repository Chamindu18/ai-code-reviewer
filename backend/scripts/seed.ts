import { prisma } from '../src/db/prisma/client';

async function main() {
  const repo = await prisma.repository.upsert({
    where: { githubRepoId: BigInt(123456789) },
    update: {},
    create: {
      githubRepoId: BigInt(123456789),
      fullName: 'acme-inc/platform',
    },
  });

  const review = await prisma.review.create({
    data: {
      repoId: repo.id,
      prNumber: 42,
      prTitle: 'Harden webhook validation and improve UI polish',
      prAuthor: 'octocat',
      status: 'completed',
      completedAt: new Date(),
    },
  });

  await prisma.suggestion.createMany({
    data: [
      {
        reviewId: review.id,
        filePath: 'backend/src/routes/webhook.ts',
        lineNumber: 34,
        category: 'security',
        severity: 'high',
        message: 'Reject invalid signature headers early',
        explanation:
          'Fail fast on missing or malformed signatures to avoid unnecessary parsing. This keeps webhook handling predictable and reduces log noise when invalid requests arrive.',
        feedback: 'accepted',
      },
      {
        reviewId: review.id,
        filePath: 'frontend/app/page.tsx',
        lineNumber: 88,
        category: 'readability',
        severity: 'medium',
        message: 'Extract hero content into a sub-component',
        explanation:
          'The hero section is larger than the rest of the page. A dedicated component keeps layout code easier to scan and encourages reuse for marketing pages.',
        feedback: 'rejected',
      },
      {
        reviewId: review.id,
        filePath: 'backend/src/services/ai.ts',
        lineNumber: 72,
        category: 'performance',
        severity: 'low',
        message: 'Avoid repeated model instantiation per request',
        explanation:
          'Reusing a single Gemini client across requests can reduce cold-start overhead. Consider memoizing the model instance inside the service.',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
