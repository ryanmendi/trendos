import { ProductData } from "../types/product";
import { TrendKeyword } from "../types/trend";

export interface ProductTrendMatch {
  matched: boolean;
  matchScore: number;
  matchedKeywords: string[];
}

export function matchProductWithTrends(
  product: ProductData,
  trends: TrendKeyword[],
): ProductTrendMatch {
  const title = product.title.toLowerCase();

  let score = 0;

  const matchedKeywords: string[] = [];

  for (const trend of trends) {
    const keyword = trend.keyword.toLowerCase();

    const words = keyword.split(" ");

    for (const word of words) {
      if (word.length > 2 && title.includes(word)) {
        score += 20;

        matchedKeywords.push(word);

        score += trend.growthPercentage * 0.05;
      }
    }
  }

  return {
    matched: score > 0,
    matchScore: Number(score.toFixed(2)),
    matchedKeywords,
  };
}
