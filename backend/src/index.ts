// 1. Load environment variables from .env
import 'dotenv/config';

// 2. Import core Express and security middleware
import express from 'express';      // web framework
import helmet from 'helmet';        // sets HTTP security headers
import rateLimit from 'express-rate-limit';   // rate‑limits requests
import cors from 'cors';

// 3. Import our application modules
import { env } from './config/env';                // validated environment config
import { logger } from './config/logger';          // structured logger
import { prisma } from './db/prisma/client';       // database client
import { redis } from './queue/connection';        // Redis connection (for queue)

// 4. Import route handlers and middleware
import webhookRoutes from './routes/webhook';
import reviewRoutes from './routes/reviews';
import feedbackRoutes from './routes/feedback';
import statsRoutes from './routes/stats';
import { errorHandler } from './middleware/errorHandler';
import { requireApiKey } from './middleware/requireAuth';

// 5. Create the Express application
const app = express();

// 6. Apply security headers to all responses (e.g., hide X-Powered-By)
app.use(helmet());

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
}));

// 7. Rate limit: allow max 100 requests per minute per client IP
//    Prevents abuse and accidental DDoS
app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 100 }));

// 8. IMPORTANT: for the /webhook route, we MUST receive the raw HTTP body
//    as a Buffer (not parsed JSON). This is needed for HMAC signature verification.
app.use('/webhook', express.raw({ type: 'application/json' }));

// 9. For all other routes, automatically parse JSON bodies
app.use(express.json());

// 10. Health check endpoint – used by load balancers / monitoring
app.get('/health', async (req, res) => {
  try {
    // Quick DB connectivity check (a real query, catches connection issues)
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected', timestamp: new Date().toISOString() });
  } catch {
    res.status(503).json({ status: 'unhealthy' });
  }
});

// 11. Mount webhook routes (public, no API key required)
app.use('/webhook', webhookRoutes);

// 12. All /api routes are protected by an API key middleware
app.use('/api', requireApiKey);

// 13. Sub‑routes for reviews and feedback
app.use('/api/reviews', reviewRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/stats', statsRoutes);

// 14. Central error handler – catches any unhandled exceptions
app.use(errorHandler);

// 15. Start the HTTP server
const server = app.listen(env.PORT, () => {
  logger.info(`Backend running on port ${env.PORT}`);
});

// 16. Graceful shutdown: when the process receives a termination signal,
//     we close the server, disconnect from database, then quit Redis.
//     This prevents lost connections or data corruption.
const shutdown = async (signal: string) => {
  logger.info(`${signal} received. Closing server...`);
  server.close();                        // stop accepting new requests
  await prisma.$disconnect();            // close database pool
  await redis.quit();                    // close Redis connection
  process.exit(0);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));   // Docker/Kubernetes stop signal
process.on('SIGINT', () => shutdown('SIGINT'));     // Ctrl+C