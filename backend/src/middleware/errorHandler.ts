import { Request, Response, NextFunction } from 'express';
import { logger } from '../config/logger';

// Express recognizes error‑handling middleware by its 4 parameters
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  // Log the full error stack for debugging
  logger.error(err);
  // Return a generic 500; we never leak error details to the client
  res.status(500).json({ error: 'Internal server error' });
}