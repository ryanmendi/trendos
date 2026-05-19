import { prisma } from "../database/prisma";

interface SavePerformanceData {
  productTitle: string;

  hook: string;
  cta: string;

  predictedScore: number;

  views?: number;
  clicks?: number;
  sales?: number;

  engagementRate?: number;
}

export async function saveContentPerformance(
  data: SavePerformanceData
) {
  return prisma.contentPerformance.create({
    data,
  });
}