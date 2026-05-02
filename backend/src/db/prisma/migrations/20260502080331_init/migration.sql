-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('pending', 'processing', 'completed', 'failed', 'partial');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('low', 'medium', 'high');

-- CreateEnum
CREATE TYPE "Feedback" AS ENUM ('accepted', 'rejected');

-- CreateTable
CREATE TABLE "repositories" (
    "id" SERIAL NOT NULL,
    "github_repo_id" BIGINT NOT NULL,
    "full_name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "repositories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "repo_id" INTEGER NOT NULL,
    "pr_number" INTEGER NOT NULL,
    "pr_title" TEXT,
    "pr_author" TEXT,
    "github_delivery" TEXT,
    "status" "ReviewStatus" NOT NULL DEFAULT 'pending',
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suggestions" (
    "id" SERIAL NOT NULL,
    "review_id" INTEGER NOT NULL,
    "file_path" TEXT,
    "line_number" INTEGER,
    "category" TEXT NOT NULL,
    "severity" "Severity" NOT NULL,
    "message" TEXT NOT NULL,
    "explanation" TEXT,
    "feedback" "Feedback",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhook_events" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "webhook_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "repositories_github_repo_id_key" ON "repositories"("github_repo_id");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_github_delivery_key" ON "reviews"("github_delivery");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_repo_id_pr_number_github_delivery_key" ON "reviews"("repo_id", "pr_number", "github_delivery");

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_repo_id_fkey" FOREIGN KEY ("repo_id") REFERENCES "repositories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggestions" ADD CONSTRAINT "suggestions_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "reviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;
