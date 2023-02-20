/*
  Warnings:

  - A unique constraint covering the columns `[email,phone]` on the table `subscriber` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "subscriber_email_phone_key" ON "subscriber"("email", "phone");
