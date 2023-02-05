/*
  Warnings:

  - Made the column `thumbnail` on table `document` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "document" ADD COLUMN     "externalLink" TEXT,
ALTER COLUMN "thumbnail" SET NOT NULL;
