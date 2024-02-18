/*
  Warnings:

  - You are about to drop the `base_codes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "base_codes" DROP CONSTRAINT "base_codes_language_id_fkey";

-- DropForeignKey
ALTER TABLE "base_codes" DROP CONSTRAINT "base_codes_problem_id_fkey";

-- DropTable
DROP TABLE "base_codes";
