/*
  Warnings:

  - You are about to drop the column `growthPercentage` on the `TrendSnapshot` table. All the data in the column will be lost.
  - You are about to drop the column `searchVolume` on the `TrendSnapshot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrendSnapshot" DROP COLUMN "growthPercentage",
DROP COLUMN "searchVolume",
ADD COLUMN     "growth" DOUBLE PRECISION,
ADD COLUMN     "value" DOUBLE PRECISION;
