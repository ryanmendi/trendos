import { ExplosionPrediction }
from "./explosion-prediction.engine";

export interface RankedOpportunity {
  keyword: string;

  priorityScore: number;

  priorityLevel: string;

  monetizationPotential: string;

  action: string;
}

export function rankTrendOpportunities(
  predictions: ExplosionPrediction[]
): RankedOpportunity[] {

  const ranked =
    predictions.map((trend) => {

      let score =
        trend.explosionScore;

      // BONUS PARA KEYWORDS BOAS
      if (
        trend.keyword.includes(
          "gamer"
        )
      ) {
        score += 25;
      }

      if (
        trend.keyword.includes(
          "smart"
        )
      ) {
        score += 20;
      }

      if (
        trend.keyword.includes(
          "tech"
        )
      ) {
        score += 15;
      }

      let priorityLevel =
        "BAIXA";

      if (score >= 170) {
        priorityLevel =
          "CRÍTICA";
      } else if (
        score >= 120
      ) {
        priorityLevel =
          "ALTA";
      } else if (
        score >= 80
      ) {
        priorityLevel =
          "MÉDIA";
      }

      let monetizationPotential =
        "MÉDIO";

      if (
        score >= 150
      ) {
        monetizationPotential =
          "EXTREMO";
      } else if (
        score >= 100
      ) {
        monetizationPotential =
          "ALTO";
      }

      let action =
        "Monitorar";

      if (
        priorityLevel ===
        "CRÍTICA"
      ) {
        action =
          "POSTAR AGORA";
      } else if (
        priorityLevel ===
        "ALTA"
      ) {
        action =
          "CRIAR CONTEÚDO";
      }

      return {
        keyword:
          trend.keyword,

        priorityScore:
          Number(score.toFixed(2)),

        priorityLevel,

        monetizationPotential,

        action,
      };
    });

  return ranked.sort(
    (a, b) =>
      b.priorityScore -
      a.priorityScore
  );
}