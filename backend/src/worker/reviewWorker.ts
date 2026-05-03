import { Worker } from 'bullmq';
import { redis } from '../queue/connection';
import { logger } from '../config/logger';
import { processPullRequest } from '../services/reviewer';

const worker = new Worker(
  // Queue name must match the one used in the queue producer (reviewQueue.ts)
  'code-review',

  // This function is called for each job in the queue
  async (job) => {
    logger.info({ jobId: job.id, pr: job.data.payload.pull_request.number }, 'Processing review');
    // The actual heavy work: fetch diff, call AI, post comments
    await processPullRequest(job.data.payload);
  },

  {
    connection: redis,         // The Redis connection (worker also uses it)
    concurrency: 2,            // Process up to 2 jobs simultaneously
    limiter: {
      max: 10,                 // Max 10 jobs
      duration: 60_000,        // per 60 seconds (1 minute)
      // This limits API calls to the AI service (e.g., 10 reviews per minute)
    },
  }
);

// Log when a job finishes or fails
worker.on('completed', (job) => {
  logger.info({ jobId: job.id }, 'Job completed');
});
worker.on('failed', (job, err) => {
  logger.error({ jobId: job?.id, err }, 'Job failed');
});