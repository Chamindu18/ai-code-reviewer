# AI Code Review Assistant

AI Code Review Assistant is a full-stack TypeScript application that automates pull request reviews using Google Gemini, posts line-level feedback to GitHub, and provides a dashboard for tracking review outcomes and developer feedback. It is designed as a production-ready portfolio project with real integrations, structured data, and a polished UI.

## Highlights

- Webhook-to-queue pipeline keeps GitHub responses under 3 seconds
- Line-level review comments posted directly on PRs
- Review history, status, and feedback tracking in a dashboard
- Redis-backed queue with a dedicated worker process
- Docker-ready stack (Postgres + Redis + API + Worker + Frontend)

## Screenshots

Add screenshots after running locally:

- Dashboard overview: docs/screenshots/dashboard.png
- Review detail: docs/screenshots/review-detail.png
- Reviews list: docs/screenshots/reviews.png

## Architecture Overview

```
GitHub Webhook -> Express API -> BullMQ Queue -> Worker -> Gemini -> GitHub Review Comments
                                      |
                                      -> Prisma/Postgres -> Dashboard
```

### Key Design Decisions

- Queue-based processing keeps webhook responses fast
- Idempotent delivery tracking avoids duplicate reviews
- Line-level review annotations use GitHub Reviews API
- Prisma transactions keep review and suggestions consistent

## Tech Stack

| Layer | Technology |
| --- | --- |
| Backend | Node.js 20, Express, TypeScript |
| Database | PostgreSQL 15, Prisma |
| Queue | BullMQ, Redis 7 |
| AI | Google Gemini SDK |
| GitHub | Octokit REST |
| Frontend | Next.js 14, React, Tailwind, React Query |
| Charts | Recharts |

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── db
│   │   ├── middleware
│   │   ├── queue
│   │   ├── routes
│   │   ├── services
│   │   ├── validation
│   │   └── worker
│   ├── scripts
│   └── package.json
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   └── package.json
└── docker-compose.yml
```

## Local Development

### 1) Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 2) Configure environment variables

Copy example files and replace values:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local
```

### 3) Start Postgres and Redis

Option A: Use Docker Compose

```bash
docker compose up -d postgres redis
```

Option B: Run locally

```bash
docker run --name pg-ai-reviewer -e POSTGRES_PASSWORD=postgres123 -d -p 5432:5432 postgres:15-alpine
docker run -d -p 6379:6379 redis:7-alpine
```

### 4) Run migrations

```bash
cd backend
npm run db:generate
npm run db:migrate
```

### 4b) Optional demo seed data

```bash
npm run db:seed
```

### 5) Start services

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd backend
npm run worker

# Terminal 3
cd frontend
npm run dev
```

### 6) Configure GitHub webhook

Expose your backend and add the webhook:

```bash
ngrok http 3001
```

Webhook URL: `https://<ngrok-url>/webhook/github`

## Environment Variables

### Backend (backend/.env)

| Variable | Purpose |
| --- | --- |
| PORT | API port (default 3001) |
| DATABASE_URL | Postgres connection string |
| REDIS_URL | Redis connection string |
| GITHUB_WEBHOOK_SECRET | GitHub webhook secret |
| GITHUB_TOKEN | GitHub token with repo scope |
| GEMINI_API_KEY | Gemini API key |
| API_SECRET | Bearer token for dashboard API |
| FRONTEND_URL | Allowed CORS origin |

### Frontend (frontend/.env.local)

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_BACKEND_URL | Base backend URL for client calls |
| BACKEND_URL | Base backend URL for server proxy routes |
| API_SECRET | Server-side bearer token |

## API Overview

Base: `http://localhost:3001/api`

| Method | Route | Description |
| --- | --- | --- |
| GET | /reviews | Paginated review list |
| GET | /reviews/:id | Review details + suggestions |
| POST | /feedback/:suggestionId | Submit feedback |
| GET | /stats | KPI summary and 7-day trend |

## Data Model (Prisma)

- Repository
  - githubRepoId, fullName, isActive
- Review
  - repoId, prNumber, prTitle, prAuthor, status, errorMessage, createdAt
- Suggestion
  - filePath, lineNumber, category, severity, message, explanation, feedback
- WebhookEvent
  - id, event, processed

## Security Notes

- Never commit real secrets; use .env.example files
- Rotate any previously exposed tokens
- API is protected by a bearer API secret for dashboard access
- Webhook requests are verified via HMAC signature

## Testing

Backend tests (Jest):

```bash
cd backend
npm test
```

## Deployment

See DEPLOYMENT.md for Docker and production deployment guidance.

## Roadmap

- CI workflow for lint/test
- Demo mode toggle for UI
- Better comment placement for diff edge cases
- Additional trend analytics (per repo, per author)

## License

MIT License. See LICENSE.
