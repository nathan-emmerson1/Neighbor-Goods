/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Compensation" TEXT NOT NULL,
    "restricted" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "is_auction" BOOLEAN NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Bids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "compensation" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "date_posted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bids_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserDetails" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bids_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "Jobs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDetails_user_id_key" ON "UserDetails"("user_id");
