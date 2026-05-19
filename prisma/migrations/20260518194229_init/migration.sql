-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "oldPrice" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "rating" DOUBLE PRECISION,
    "reviews" INTEGER,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "store" TEXT NOT NULL,
    "viralScore" DOUBLE PRECISION DEFAULT 0,
    "conversionScore" DOUBLE PRECISION DEFAULT 0,
    "saturationScore" DOUBLE PRECISION DEFAULT 0,
    "posted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
