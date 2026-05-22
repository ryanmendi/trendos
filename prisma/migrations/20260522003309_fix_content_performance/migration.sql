/*
  Warnings:

  - You are about to drop the column `clicks` on the `ContentPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `engagementRate` on the `ContentPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `predictedScore` on the `ContentPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `productTitle` on the `ContentPerformance` table. All the data in the column will be lost.
  - You are about to drop the column `sales` on the `ContentPerformance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ContentPerformance" DROP COLUMN "clicks",
DROP COLUMN "engagementRate",
DROP COLUMN "predictedScore",
DROP COLUMN "productTitle",
DROP COLUMN "sales",
ADD COLUMN     "comments" INTEGER,
ADD COLUMN     "keyword" TEXT,
ADD COLUMN     "likes" INTEGER,
ADD COLUMN     "retentionScore" DOUBLE PRECISION,
ADD COLUMN     "shares" INTEGER,
ADD COLUMN     "watchTime" DOUBLE PRECISION;
