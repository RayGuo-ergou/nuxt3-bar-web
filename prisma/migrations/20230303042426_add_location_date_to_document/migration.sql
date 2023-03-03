/*
  Warnings:

  - Added the required column `date` to the `document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `document` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Location" AS ENUM ('MELBOURNE', 'SYDNEY', 'BRISBANE', 'ADELAIDE', 'PERTH', 'HOBART', 'DARWIN', 'CANBERRA', 'GOLD_COAST', 'NEWCASTLE', 'SUNSHINE_COAST', 'CENTRAL_COAST', 'WOLLONGONG', 'GEELONG', 'TOWNSVILLE', 'CAIRNS');

-- AlterTable
ALTER TABLE "document" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" "Location" NOT NULL;
