-- CreateTable
CREATE TABLE "ContentPerformance" (
    "id" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "hook" TEXT NOT NULL,
    "cta" TEXT NOT NULL,
    "predictedScore" DOUBLE PRECISION NOT NULL,
    "views" INTEGER,
    "clicks" INTEGER,
    "sales" INTEGER,
    "engagementRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentPerformance_pkey" PRIMARY KEY ("id")
);
