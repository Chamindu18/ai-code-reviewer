import { Queue } from 'bullmq';
import { redis } from './connection';

// A BullMQ Queue is the "producer" side – where jobs are published.
// The worker will later consume from this same queue.
export const reviewQueue = new Queue('code-review', { connection: redis });