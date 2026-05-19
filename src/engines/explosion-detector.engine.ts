import { prisma } from "../database/prisma";

export async function detectTrendExplosion(
  keyword: string
) {
  const snapshots =
    await prisma.trendSnapshot.findMany({
      where: {
        keyword,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 5,
    });

  if (snapshots.length < 2) {
    return null;
  }

  const latest = snapshots[0];

  const oldest =
    snapshots[snapshots.length - 1];

  const growth =
    latest.searchVolume -
    oldest.searchVolume;

  const growthPercentage =
    (growth / oldest.searchVolume) *
    100;

  let explosionLevel = "Baixo";

  if (growthPercentage > 200) {
    explosionLevel = "EXPLOSIVO";
  } else if (growthPercentage > 100) {
    explosionLevel = "ALTO";
  } else if (growthPercentage > 50) {
    explosionLevel = "MÉDIO";
  }

  return {
    keyword,

    growth,

    growthPercentage:
      Number(
        growthPercentage.toFixed(2)
      ),

    explosionLevel,
  };
}