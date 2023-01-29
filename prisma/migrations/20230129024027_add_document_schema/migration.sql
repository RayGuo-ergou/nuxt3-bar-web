-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('NEW', 'OLD');

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "draft" BOOLEAN NOT NULL DEFAULT false,
    "navigation" BOOLEAN NOT NULL DEFAULT true,
    "content" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);
