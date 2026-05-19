import { ProductData } from "../types/product";

export interface ViralAnalysis {
  viralScore: number;
  viralCategory: string;
}

export function calculateViralScore(
  product: ProductData
): ViralAnalysis {
  let score = 0;

  // DESCONTO
  if (product.discount) {
    score += product.discount * 1.5;
  }

  // AVALIAÇÕES
  if (product.rating) {
    score += product.rating * 10;
  }

  // REVIEWS
  if (product.reviews) {
    score += Math.min(product.reviews / 100, 30);
  }

  // PREÇO PSICOLÓGICO
  if (product.price < 150) {
    score += 20;
  }

  // IMPULSIVIDADE
  const impulsiveKeywords = [
    "rgb",
    "gamer",
    "led",
    "mini",
    "portátil",
    "wireless",
  ];

  const title = product.title.toLowerCase();

  for (const keyword of impulsiveKeywords) {
    if (title.includes(keyword)) {
      score += 10;
    }
  }

  // CLASSIFICAÇÃO
  let category = "Baixo potencial";

  if (score >= 120) {
    category = "Explosivo";
  } else if (score >= 90) {
    category = "Alto potencial";
  } else if (score >= 60) {
    category = "Médio potencial";
  }

  return {
    viralScore: Number(score.toFixed(2)),
    viralCategory: category,
  };
}