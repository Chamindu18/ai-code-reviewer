# 🤖 AI Code Review Assistant

An automated code review system that listens to GitHub Pull Request webhooks, analyzes diffs using Google Gemini (via `@google/generative-ai`), and posts line-specific review comments directly on the PR. Includes a Next.js dashboard for review history, statistics, and feedback tracking.

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
└──────────────────────────│   Gemini    │◄────────────────────┘
│    (AI)     │
└─────────────┘
│
▼
┌─────────────┐
│   GitHub    │
│   (Review   │
│   Comments) │
└─────────────┘

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
| **Backend** | Node.js 20+, Express.js, TypeScript |
| **Database** | PostgreSQL 15+ |
| **ORM** | Prisma 7 |
| **Queue** | BullMQ + Redis 7+ |
| **AI** | Google Gemini SDK (`@google/generative-ai`) |
| **GitHub API** | Octokit REST (`@octokit/rest`) |
| **Frontend** | Next.js 14 (App Router), React, TypeScript, Tailwind CSS |
| **State Management** | TanStack Query (React Query) |
| **Charts & Icons** | Recharts, Lucide React |

---

## Prerequisites

1. **Node.js 20+ LTS** (`node --version`)
2. **Git**
3. **PostgreSQL 15+** (Running locally or via Docker)
4. **Redis 7+** (Running locally or via Docker)
5. **ngrok** (Required for local GitHub webhook testing)

---

## Project Structure

```text
/
├── backend/
│   ├── src/
│   │   ├── config/           # Environment and Logger configuration
│   │   ├── db/prisma/        # Prisma schema and generated files
│   │   ├── middleware/       # Express middlewares (Webhook verification, auth, etc.)
│   │   ├── queue/            # BullMQ connection & producers
│   │   ├── routes/           # Express routes (webhooks, reviews, feedback)
│   │   ├── services/         # Core logic (AI, GitHub, chunking)
│   │   ├── validation/       # Zod schemas
│   │   ├── worker/           # BullMQ consumer logic
│   │   └── index.ts          # Express API entry
│   ├── .env                  # Backend secrets
│   └── package.json          
│
└── frontend/
    ├── app/                  # Next.js 14 App Router
    ├── components/           # UI Components (ReviewCard, StatsPanel, DiffViewer)
    ├── lib/                  # Shared utilities (API clients)
    └── package.json          
```

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd ai-code-reviewer

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. PostgreSQL Setup
Ensure PostgreSQL is running locally on port `5432` or start it via Docker:
```bash
docker run --name pg-ai-reviewer -e POSTGRES_PASSWORD=12345 -d -p 5432:5432 postgres:15-alpine
```

### 3. Redis Setup
Ensure Redis is running locally on port `6379` or start it via Docker:
```bash
docker run -d -p 6379:6379 redis:7-alpine
```

### 4. Environment Variables
Create a `.env` file in the `backend/` directory:

```env
PORT=3001
DATABASE_URL="postgresql://postgres:12345@localhost:5432/code_reviewer?schema=public"
REDIS_URL="redis://localhost:6379"

# GitHub Setup
GITHUB_WEBHOOK_SECRET="your_webhook_secret"
GITHUB_TOKEN="your_github_personal_access_token"

# AI Setup
GEMINI_API_KEY="your_google_gemini_api_key"
API_SECRET="your_api_secret_for_frontend_communication"
```

### 5. Database Migrations
In the `backend/` directory, apply the Prisma schema to your database:
```bash
cd backend
npm run db:generate
npm run db:migrate
```

### 6. Run the Services

You need three terminal windows to run everything locally:

**Terminal 1 (Backend API):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Background Worker):**
```bash
cd backend
npm run worker
```

**Terminal 3 (Next.js Frontend):**
```bash
cd frontend
npm run dev
```

### 7. GitHub Webhook Configuration
To test locally, expose your backend port with ngrok:
```bash
ngrok http 3001
```

Take the `https` URL from ngrok (e.g., `https://abcd.ngrok-free.app`) and configure it on your GitHub Repository:
1. Go to **Settings > Webhooks**.
2. **Payload URL:** `https://<ngrok-url>/api/webhook`
3. **Content type:** `application/json`
4. **Secret:** Match the `GITHUB_WEBHOOK_SECRET` in your `.env`.
5. Select **Let me select individual events** → Check **Pull requests** & **Pull request review comments**.

---

## Development Workflow
1. Push code to your test repository and open a Pull Request.
2. The GitHub Webhook hits the Express API.
3. The API validates the payload and drops a job into BullMQ (Redis).
4. The Backend Worker picks up the job, fetches the diff using Octokit, and chunks it.
5. The Google Gemini SDK generates review suggestions.
6. The suggestions are posted as line-level annotations on the PR using Octokit.
7. Open `http://localhost:3000` to interact with the Dashboard and track review feedback!

---

## License
ISC

