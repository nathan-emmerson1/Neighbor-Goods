/*
  Warnings:

  - You are about to drop the column `Compensation` on the `Jobs` table. All the data in the column will be lost.
  - Added the required column `compensation` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jobs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "compensation" TEXT NOT NULL,
    "restricted" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "is_auction" BOOLEAN NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL
);
INSERT INTO "new_Jobs" ("address", "description", "end_date", "id", "is_auction", "location", "name", "restricted", "start_date") SELECT "address", "description", "end_date", "id", "is_auction", "location", "name", "restricted", "start_date" FROM "Jobs";
DROP TABLE "Jobs";
ALTER TABLE "new_Jobs" RENAME TO "Jobs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
