import { prisma } from "../database/prisma";

import { TrendKeyword } from "../types/trend";

export async function saveTrendSnapshot(
  trend: TrendKeyword
) {
  return prisma.trendSnapshot.create({
    data: {
      keyword: trend.keyword,

      searchVolume:
        trend.searchVolume,

      growthPercentage:
        trend.growthPercentage,
    },
  });
}