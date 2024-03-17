/*
  Warnings:

  - You are about to drop the column `description` on the `problems` table. All the data in the column will be lost.
  - You are about to drop the column `io` on the `problems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "problems" DROP COLUMN "description",
DROP COLUMN "io";
