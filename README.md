# 🤖 AI Code Review Assistant

An automated code review system that listens to GitHub Pull Request webhooks, analyzes diffs using Claude (Anthropic), and posts line-specific review comments directly on the PR. Includes a Next.js dashboard for review history, statistics, and feedback tracking.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [1. Clone & Install](#1-clone--install)
  - [2. PostgreSQL Setup](#2-postgresql-setup)
  - [3. Redis Setup](#3-redis-setup)
  - [4. Environment Variables](#4-environment-variables)
  - [5. Database Migrations](#5-database-migrations)
  - [6. Run the Services](#6-run-the-services)
  - [7. GitHub Webhook Configuration](#7-github-webhook-configuration)
- [Development Workflow](#development-workflow)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
  - [Backend (Railway)](#backend-railway)
  - [Frontend (Vercel)](#frontend-vercel)
- [Environment Reference](#environment-reference)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Architecture Overview
┌─────────────┐     Webhook      ┌─────────────┐     Queue      ┌─────────────┐
│   GitHub    │ ───────────────► │   Express   │ ─────────────► │   BullMQ    │
│   (PR open) │                  │   API       │                │   (Redis)   │
└─────────────┘                  └─────────────┘                └──────┬──────┘
▲                                                               │
│                                                               ▼
│                                                       ┌─────────────┐
│                                                       │   Worker    │
│                                                       │  (process)  │
│                                                       └──────┬──────┘
│                                                              │
│                          ┌─────────────┐                     │
└──────────────────────────│   Claude    │◄────────────────────┘
│  (Anthropic)│
└─────────────┘
│
▼
┌─────────────┐
│   GitHub    │
│   (Review   │
│   Comments) │
└─────────────┘

---

**Key Design Decisions:**

| Feature | Rationale |
|---------|-----------|
| **Queue + Worker** | GitHub requires webhook responses in < 3 seconds. The worker processes AI reviews asynchronously. |
| **Idempotency** | Every `X-GitHub-Delivery` ID is tracked in `WebhookEvent` to prevent duplicate reviews on retries. |
| **Line-specific comments** | Uses GitHub's Review API (`pulls.createReview`) instead of generic issue comments. |
| **Transactions** | Database operations are atomic — if GitHub posting fails, the review is marked `failed`, not stuck. |
| **Prisma 7 + Adapter** | Type-safe queries with direct PostgreSQL driver connection. |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Node.js 20+, Express, TypeScript |
| **Database** | PostgreSQL 15+ |
| **ORM** | Prisma 7 with `@prisma/adapter-pg` |
| **Queue** | BullMQ + Redis 7+ |
| **AI** | Anthropic Claude (Sonnet 4) |
| **GitHub API** | Octokit REST |
| **Frontend** | Next.js 14+ (App Router), React, TypeScript, Tailwind CSS |
| **State Management** | TanStack Query (React Query) |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Logging** | Pino (structured JSON) |
| **Validation** | Zod |

---

## Prerequisites

Install these tools **in order**:

1. **Node.js 20+ LTS**
   - https://nodejs.org → Download LTS
   - Verify: `node --version` → `v20.x` or `v22.x`

2. **Git**
   - https://git-scm.com → Download → Install
   - Verify: `git --version`

3. **PostgreSQL 15+**
   - https://www.postgresql.org/download/
   - Install pgAdmin (GUI included)
   - Verify service is running

4. **Redis 7+**
   - **Windows:** `docker run -d -p 6379:6379 redis:7-alpine`
   - **macOS:** `brew install redis && brew services start redis`
   - Verify: `redis-cli ping` → `PONG`

5. **ngrok** (for local webhook testing)
   - https://ngrok.com → Sign up → Download
   - Verify: `ngrok --version`

---

## Project Structure

ai-code-reviewer/
├── backend/
│   ├── src/
│   │   ├── config/           # env.ts (validated), logger.ts (Pino)
│   │   ├── db/
│   │   │   └── prisma/
│   │   │       ├── schema.prisma
│   │   │       └── migrations/
│   │   ├── middleware/       # verifyWebhook.ts, requireAuth.ts, errorHandler.ts
│   │   ├── queue/            # Redis connection, BullMQ queue producer
│   │   ├── worker/           # BullMQ consumer (separate process)
│   │   ├── services/         # github.ts, ai.ts, reviewer.ts, chunker.ts
│   │   ├── routes/           # webhook.ts, reviews.ts, feedback.ts
│   │   ├── validation/       # Zod schemas
│   │   └── index.ts          # Express entry point
│   ├── prisma.config.ts      # Prisma 7 config (datasource URL)
│   ├── .env                  # Secrets (gitignored)
│   └── package.json
│
├── frontend/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # Proxy routes (secure backend calls)
│   │   ├── reviews/
│   │   └── page.tsx
│   ├── components/           # React components
│   ├── lib/                  # API client
│   └── package.json
│
├── .gitignore
└── README.md

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd ai-code-reviewer

# Backend
cd backend
npm install
npm install pg @prisma/adapter-pg  # Prisma 7 PostgreSQL adapter

# Frontend (from project root)
cd ../frontend
npm install

