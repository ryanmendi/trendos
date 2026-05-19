interface OpportunityInput {
  title: string;

  viralScore: number;

  trendScore: number;

  growthScore: number;

  saturationLevel: number;

  matchScore: number;

  price: number;
}

export interface OpportunityResult {
  title: string;

  opportunityScore: number;

  opportunityLevel: string;
}

export function analyzeOpportunity(
  product: OpportunityInput
): OpportunityResult {
  let score = 0;

  // VIRAL
  score += product.viralScore * 0.3;

  // TREND
  score += product.trendScore * 0.2;

  // GROWTH
  score += product.growthScore * 0.3;

  // MATCH
  score += product.matchScore * 0.2;

  // PREÇO IMPULSIVO
  if (product.price <= 150) {
    score += 30;
  }

  // PENALIDADE SATURAÇÃO
  score -= product.saturationLevel * 0.5;

  let opportunityLevel = "Baixa";

  if (score >= 160) {
    opportunityLevel = "EXPLOSIVA";
  } else if (score >= 120) {
    opportunityLevel = "ALTA";
  } else if (score >= 80) {
    opportunityLevel = "MÉDIA";
  }

  return {
    title: product.title,

    opportunityScore:
      Number(score.toFixed(2)),

    opportunityLevel,
  };
}