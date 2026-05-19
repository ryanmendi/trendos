export interface PostingData {
  title: string;

  viralScore: number;
  trendScore: number;
  growthScore: number;
  saturationLevel: number;

  matchScore: number;
}

export interface PostingPriority {
  title: string;
  finalScore: number;
  priority: string;
}

export function calculatePostingPriority(
  product: PostingData
): PostingPriority {
  let finalScore = 0;

  // VIRAL
  finalScore += product.viralScore * 0.4;

  // TREND
  finalScore += product.trendScore * 0.2;

  // GROWTH
  finalScore += product.growthScore * 0.2;

  // MATCH COM TRENDS
  finalScore += product.matchScore * 0.3;

  // PENALIDADE SATURAÇÃO
  finalScore -= product.saturationLevel * 0.2;

  let priority = "Baixa";

  if (finalScore >= 140) {
    priority = "CRÍTICA";
  } else if (finalScore >= 100) {
    priority = "Alta";
  } else if (finalScore >= 70) {
    priority = "Média";
  }

  return {
    title: product.title,
    finalScore: Number(finalScore.toFixed(2)),
    priority,
  };
}