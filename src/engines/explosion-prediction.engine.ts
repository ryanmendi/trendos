import { TrendGrowthAnalysis }
  from "./real-trend-growth.engine";

export interface ExplosionPrediction {
  keyword: string;

  explosionScore: number;

  probabilityLevel: string;

  recommendation: string;
}

export function predictTrendExplosion(
  trends: TrendGrowthAnalysis[]
): ExplosionPrediction[] {

  return trends.map((trend) => {

    let score = 0;

    // FORÇA ATUAL
    score += trend.currentValue;

    // CRESCIMENTO
    score += trend.growthPercent;

    // ACELERAÇÃO
    if (
      trend.accelerationLevel ===
      "EXTREMA"
    ) {
      score += 50;
    }

    if (
      trend.accelerationLevel ===
      "ALTA"
    ) {
      score += 30;
    }

    // PROBABILIDADE
    if (
      trend.explosionProbability ===
      "EXTREMA"
    ) {
      score += 60;
    }

    if (
      trend.explosionProbability ===
      "ALTA"
    ) {
      score += 35;
    }

    let probabilityLevel =
      "BAIXA";

    if (score >= 120) {
      probabilityLevel =
        "EXPLOSIVA";
    } else if (score >= 80) {
      probabilityLevel =
        "ALTA";
    } else if (score >= 50) {
      probabilityLevel =
        "MÉDIA";
    }

    let recommendation =
      "Monitorar";

    if (
      probabilityLevel ===
      "EXPLOSIVA"
    ) {
      recommendation =
        "POSTAR IMEDIATAMENTE";
    } else if (
      probabilityLevel ===
      "ALTA"
    ) {
      recommendation =
        "Criar conteúdo rápido";
    }

    return {
      keyword: trend.keyword,

      explosionScore:
        Number(score.toFixed(2)),

      probabilityLevel,

      recommendation,
    };
  });
}