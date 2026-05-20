import { RealTrendPoint } from "../types/real-trend";

export interface TrendGrowthAnalysis {
  keyword: string;

  currentValue: number;

  previousValue: number;

  growthPercent: number;

  accelerationLevel: string;

  explosionProbability: string;
}

const KEYWORDS = [
  "gadgets",
  "setup gamer",
  "tecnologia",
  "smartwatch",
  "mouse gamer",
];

export function analyzeRealTrendGrowth(
  timeline: RealTrendPoint[]
): TrendGrowthAnalysis[] {
  if (timeline.length < 2) {
    return [];
  }

  const last =
    timeline[timeline.length - 1];

  const previous =
    timeline[timeline.length - 2];

  return KEYWORDS.map(
    (keyword, index) => {
      const current =
        last.values[index] || 0;

      const prev =
        previous.values[index] || 0;

      let growthPercent = 0;

      if (prev > 0) {
        growthPercent =
          ((current - prev) / prev) *
          100;
      }

      let accelerationLevel =
        "Baixa";

      if (growthPercent >= 100) {
        accelerationLevel =
          "EXTREMA";
      } else if (
        growthPercent >= 50
      ) {
        accelerationLevel =
          "ALTA";
      } else if (
        growthPercent >= 20
      ) {
        accelerationLevel =
          "MÉDIA";
      }

      let explosionProbability =
        "Baixa";

      if (
        current >= 80 &&
        growthPercent >= 20
      ) {
        explosionProbability =
          "ALTA";
      }

      if (
        current >= 90 &&
        growthPercent >= 50
      ) {
        explosionProbability =
          "EXTREMA";
      }

      return {
        keyword,

        currentValue: current,

        previousValue: prev,

        growthPercent:
          Number(
            growthPercent.toFixed(2)
          ),

        accelerationLevel,

        explosionProbability,
      };
    }
  );
}