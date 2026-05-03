// crypto is a Node.js built-in module for cryptographic functions
import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export function verifyGitHubWebhook(req: Request, res: Response, next: NextFunction) {
  // GitHub sends a SHA‑256 HMAC signature in the header 'x-hub-signature-256'
  const signature = req.headers['x-hub-signature-256'] as string;
  if (!signature) {
    return res.status(401).json({ error: 'No signature' });
  }

  // Create an HMAC using our shared secret and the raw body (Buffer)
  const hmac = crypto.createHmac('sha256', env.GITHUB_WEBHOOK_SECRET);
  const digest = 'sha256=' + hmac.update(req.body).digest('hex');

  // Compare in constant time to prevent timing attacks
  const sigBuf = Buffer.from(signature);
  const digBuf = Buffer.from(digest);
  if (sigBuf.length !== digBuf.length || !crypto.timingSafeEqual(sigBuf, digBuf)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Signature valid → parse the raw body into a JavaScript object for downstream use
  req.body = JSON.parse(req.body);
  next();   // proceed to the actual webhook handler
}