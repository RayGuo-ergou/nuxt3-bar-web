/*
  Warnings:

  - You are about to drop the column `userId` on the `Feedback` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `enquirerId` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_userId_fkey";

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "userId",
ADD COLUMN     "enquirerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Enquirer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enquirer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enquirer_email_phone_key" ON "Enquirer"("email", "phone");

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_enquirerId_fkey" FOREIGN KEY ("enquirerId") REFERENCES "Enquirer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
