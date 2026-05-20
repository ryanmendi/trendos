import { prisma } from "../lib/prisma";

import { TrendGrowthAnalysis } from "../engines/real-trend-growth.engine";

export async function saveTrendSnapshots(
  trends: TrendGrowthAnalysis[]
) {
  for (const trend of trends) {
    await prisma.trendSnapshot.create({
      data: {
        keyword: trend.keyword,

        value: trend.currentValue,

        growth: trend.growthPercent,
      },
    });
  }
}