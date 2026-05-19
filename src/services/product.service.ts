import { prisma } from "../database/prisma";
import { ProductData } from "../types/product";

import { calculateViralScore } from "../engines/viral-score.engine";
import { analyzeTrend } from "../engines/trend-hunter.engine";

export async function saveProducts(products: ProductData[]) {
  for (const product of products) {
    const exists = await prisma.product.findUnique({
      where: {
        url: product.url,
      },
    });

    if (exists) {
      console.log("Produto duplicado:", product.title);
      continue;
    }

    const analysis = calculateViralScore(product);

    const trend = analyzeTrend(product);

    await prisma.product.create({
      data: {
        ...product,

        viralScore: analysis.viralScore,
        viralCategory: analysis.viralCategory,

        growthScore: trend.growthScore,
        trendScore: trend.trendScore,
        saturationLevel: trend.saturationLevel,
      },
    });

    console.log(
      `[${analysis.viralCategory}] ${product.title}`
    );

    console.log({
      viral: analysis.viralScore,
      growth: trend.growthScore,
      trend: trend.trendScore,
      saturation: trend.saturationLevel,
    });
  }
}