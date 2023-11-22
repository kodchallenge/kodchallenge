-- CreateEnum
CREATE TYPE "solution_state" AS ENUM ('success', 'failed', 'build-error', 'timeout', 'pending');

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base_codes" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR NOT NULL,
    "language_id" INTEGER NOT NULL,
    "problem_id" INTEGER NOT NULL,

    CONSTRAINT "base_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "slug" VARCHAR NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "problems" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "slug" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "io" VARCHAR NOT NULL,
    "score" INTEGER NOT NULL,
    "is_private" BOOLEAN NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "difficulty" VARCHAR NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solution_cases" (
    "id" SERIAL NOT NULL,
    "solution_id" INTEGER NOT NULL,
    "case_index" INTEGER NOT NULL,
    "output" VARCHAR NOT NULL,
    "status" BOOLEAN NOT NULL,
    "build" BOOLEAN,
    "timeout" BOOLEAN,

    CONSTRAINT "solution_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solutions" (
    "id" SERIAL NOT NULL,
    "problem_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "code" VARCHAR NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "language_id" INTEGER NOT NULL,
    "state" "solution_state",

    CONSTRAINT "solutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR NOT NULL,
    "username" VARCHAR(24) NOT NULL,
    "firstname" VARCHAR,
    "lastname" VARCHAR,
    "created_at" TIMESTAMP(6),
    "deleted_at" TIMESTAMPTZ(6),
    "is_deleted" BOOLEAN,
    "is_verified" BOOLEAN,
    "verified_at" TIMESTAMP(6),
    "biography" VARCHAR,
    "location" VARCHAR,
    "github" VARCHAR,
    "linkedin" VARCHAR,
    "twitter" VARCHAR,
    "website" VARCHAR,
    "avatar" VARCHAR,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "language_slug_ukey" ON "languages"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_uk" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_uk" ON "users"("username");

-- AddForeignKey
ALTER TABLE "base_codes" ADD CONSTRAINT "base_codes_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "base_codes" ADD CONSTRAINT "base_codes_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "problems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "problems" ADD CONSTRAINT "problems_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "solution_cases" ADD CONSTRAINT "fk_solution_test_cases_solution_id" FOREIGN KEY ("solution_id") REFERENCES "solutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "solutions" ADD CONSTRAINT "fk_solutions_problem_id" FOREIGN KEY ("problem_id") REFERENCES "problems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "solutions" ADD CONSTRAINT "fk_solutions_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

