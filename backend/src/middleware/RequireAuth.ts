import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export function requireApiKey(req: Request, res: Response, next: NextFunction) {
  // Expect a header: Authorization: Bearer <API_SECRET>
  const key = req.headers.authorization?.replace('Bearer ', '');
  if (!key || key !== env.API_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();   // allowed
}