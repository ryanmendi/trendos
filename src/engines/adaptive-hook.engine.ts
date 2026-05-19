import { prisma } from "../database/prisma";

export async function getBestPerformingHooks() {
  const hooks =
    await prisma.contentPerformance.findMany();

  const grouped: Record<
    string,
    {
      engagement: number;
      sales: number;
      count: number;
    }
  > = {};

  for (const item of hooks) {
    if (!grouped[item.hook]) {
      grouped[item.hook] = {
        engagement: 0,
        sales: 0,
        count: 0,
      };
    }

    grouped[item.hook].engagement +=
      item.engagementRate || 0;

    grouped[item.hook].sales +=
      item.sales || 0;

    grouped[item.hook].count++;
  }

  const ranking = Object.entries(grouped)
    .map(([hook, data]) => ({
      hook,

      score:
        data.engagement * 1.5 +
        data.sales * 3,
    }))
    .sort((a, b) => b.score - a.score);

  return ranking.slice(0, 3);
}