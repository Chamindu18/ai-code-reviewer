import IORedis from 'ioredis';
import { env } from '../config/env';

// Create a single Redis connection instance used by both BullMQ (queue) and worker
export const redis = new IORedis(env.REDIS_URL, {
  // maxRetriesPerRequest must be null for BullMQ v2+
  // It prevents IORedis from giving up after a few retries when waiting for a job.
  maxRetriesPerRequest: null,
});