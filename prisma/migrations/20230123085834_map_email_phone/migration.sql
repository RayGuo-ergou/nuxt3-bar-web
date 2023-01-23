/*
  Warnings:

  - A unique constraint covering the columns `[email,phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_phone_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_phone_key" ON "User"("email", "phone");
