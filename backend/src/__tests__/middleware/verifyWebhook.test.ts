import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { verifyGitHubWebhook } from '../../middleware/verifyWebhook';
import { env } from '../../config/env';

describe('verifyGitHubWebhook', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    next = jest.fn();
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should verify valid GitHub webhook signature', () => {
    const body = JSON.stringify({ action: 'opened', pull_request: { number: 1 } });
    const hmac = crypto.createHmac('sha256', env.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(body).digest('hex');

    req = {
      headers: {
        'x-hub-signature-256': digest,
      },
      body: Buffer.from(body),
    };

    verifyGitHubWebhook(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('should reject missing signature', () => {
    req = {
      headers: {},
      body: Buffer.from('{}'),
    };

    verifyGitHubWebhook(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'No signature' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should reject invalid signature', () => {
    req = {
      headers: {
        'x-hub-signature-256': 'sha256=invalid_signature_123',
      },
      body: Buffer.from('{}'),
    };

    verifyGitHubWebhook(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });

  it('should parse body JSON after verification', () => {
    const body = JSON.stringify({ action: 'synchronize' });
    const hmac = crypto.createHmac('sha256', env.GITHUB_WEBHOOK_SECRET);
    const digest = 'sha256=' + hmac.update(body).digest('hex');

    req = {
      headers: {
        'x-hub-signature-256': digest,
      },
      body: Buffer.from(body),
    };

    verifyGitHubWebhook(req as Request, res as Response, next);

    expect(typeof req.body).toBe('object');
    expect(req.body.action).toBe('synchronize');
  });
});
