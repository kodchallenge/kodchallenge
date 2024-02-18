/*
  Warnings:

  - Added the required column `icon` to the `problems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "problems" ADD COLUMN     "icon" VARCHAR NOT NULL,
ADD COLUMN     "subtitle" VARCHAR(255);
