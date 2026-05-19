import { TrendKeyword } from "../types/trend";

export interface TrendScore {
  keyword: string;
  score: number;
  potential: string;
}

export function analyzeTrendKeyword(
  trend: TrendKeyword
): TrendScore {
  let score = 0;

  // CRESCIMENTO
  score += trend.growthPercentage * 0.2;

  // VOLUME
  score += trend.searchVolume / 5000;

  // CATEGORIAS QUENTES
  const hotCategories = [
    "gaming",
    "gadgets",
    "setup",
    "tech",
  ];

  if (hotCategories.includes(trend.category)) {
    score += 30;
  }

  let potential = "Baixo";

  if (score >= 120) {
    potential = "Explosivo";
  } else if (score >= 90) {
    potential = "Alto";
  } else if (score >= 60) {
    potential = "Médio";
  }

  return {
    keyword: trend.keyword,
    score: Number(score.toFixed(2)),
    potential,
  };
}