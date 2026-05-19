import { prisma } from "../database/prisma";

export async function findBestHooks() {
  const hooks =
    await prisma.contentPerformance.findMany();

  const groupedHooks: Record<
    string,
    {
      totalViews: number;
      totalSales: number;
      totalEngagement: number;
      count: number;
    }
  > = {};

  for (const item of hooks) {
    if (!groupedHooks[item.hook]) {
      groupedHooks[item.hook] = {
        totalViews: 0,
        totalSales: 0,
        totalEngagement: 0,
        count: 0,
      };
    }

    groupedHooks[item.hook].totalViews +=
      item.views || 0;

    groupedHooks[item.hook].totalSales +=
      item.sales || 0;

    groupedHooks[item.hook]
      .totalEngagement +=
      item.engagementRate || 0;

    groupedHooks[item.hook].count++;
  }

  const ranking = Object.entries(
    groupedHooks
  ).map(([hook, data]) => ({
    hook,

    avgViews:
      data.totalViews / data.count,

    avgSales:
      data.totalSales / data.count,

    avgEngagement:
      data.totalEngagement / data.count,

    optimizationScore:
      data.totalSales * 2 +
      data.totalEngagement,
  }));

  return ranking.sort(
    (a, b) =>
      b.optimizationScore -
      a.optimizationScore
  );
}