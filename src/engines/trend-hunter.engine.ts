import { ProductData } from "../types/product";

export interface TrendAnalysis {
  growthScore: number;
  trendScore: number;
  saturationLevel: number;
}

export function analyzeTrend(
  product: ProductData
): TrendAnalysis {
  let growthScore = 0;
  let trendScore = 0;
  let saturationLevel = 0;

  const title = product.title.toLowerCase();

  // KEYWORDS EM ALTA
  const trendingKeywords = [
    "rgb",
    "wireless",
    "smart",
    "mini",
    "led",
    "gamer",
    "setup",
    "pro",
    "ultra",
    "portable",
  ];

  for (const keyword of trendingKeywords) {
    if (title.includes(keyword)) {
      growthScore += 10;
      trendScore += 8;
    }
  }

  // DESCONTO AJUDA TREND
  if (product.discount) {
    growthScore += product.discount * 0.5;
  }

  // MUITAS REVIEWS = POSSÍVEL SATURAÇÃO
  if (product.reviews) {
    if (product.reviews > 20000) {
      saturationLevel += 60;
    } else if (product.reviews > 10000) {
      saturationLevel += 40;
    } else {
      growthScore += 15;
    }
  }

  // PREÇO BAIXO AJUDA VIRALIZAÇÃO
  if (product.price < 120) {
    trendScore += 20;
  }

  return {
    growthScore: Number(growthScore.toFixed(2)),
    trendScore: Number(trendScore.toFixed(2)),
    saturationLevel: Number(saturationLevel.toFixed(2)),
  };
}