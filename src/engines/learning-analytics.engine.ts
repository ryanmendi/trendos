import { prisma } from "../lib/prisma";

export async function analyzeLearning() {

  const performances =
    await prisma.contentPerformance.findMany();

  if (
    performances.length === 0
  ) {
    return {
      topHooks: [],
      topCTAs: [],
      bestKeywords: [],
    };
  }

  // TOP HOOKS
  const topHooks =
    [...performances]
      .sort(
        (a, b) =>
          (b.views || 0) -
          (a.views || 0)
      )
      .slice(0, 5)
      .map((item) => ({
        hook: item.hook,
        views: item.views,
      }));

  // TOP CTAS
  const topCTAs =
    [...performances]
      .sort(
        (a, b) =>
          (b.shares || 0) -
          (a.shares || 0)
      )
      .slice(0, 5)
      .map((item) => ({
        cta: item.cta,
        shares: item.shares,
      }));

  // BEST KEYWORDS
  const bestKeywords =
    [...performances]
      .sort(
        (a, b) =>
          (b.retentionScore || 0) -
          (a.retentionScore || 0)
      )
      .slice(0, 5)
      .map((item) => ({
        keyword: item.keyword,
        retention:
          item.retentionScore,
      }));

  return {
    topHooks,
    topCTAs,
    bestKeywords,
  };
}