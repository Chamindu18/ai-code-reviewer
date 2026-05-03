// pino is a fast, structured JSON logger perfect for production
import pino from 'pino';

export const logger = pino({
  // Minimum log level: can be overridden by LOG_LEVEL env var
  // In production, we usually keep it at 'info'
  level: process.env.LOG_LEVEL || 'info',

  // Only use pretty printing during development; in production we want raw JSON
  transport: process.env.NODE_ENV !== 'production'
    ? {
        // pino-pretty makes the output human‑readable with colors
        target: 'pino-pretty',
        options: { colorize: true }
      }
    : undefined,   // no transport → pure JSON for log aggregators
});