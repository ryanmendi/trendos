import { RankedOpportunity } from "./opportunity-ranking.engine";
import { RetentionAnalysis } from "./retention-optimization.engine";

export interface AIDecision {
  keyword: string;

  decisionScore: number;

  priority: string;

  action: string;

  riskLevel: string;

  reasoning: string;
}

export function makeAIDecisions(
  opportunities: RankedOpportunity[],
  retention: RetentionAnalysis[]
): AIDecision[] {

  return opportunities.map((opp) => {

    const retentionData =
      retention.find(
        (r) =>
          r.keyword ===
          opp.keyword
      );

    console.dir(opp, {
      depth: null,
    });

    let score = 0;

    // Priority
    score +=
      opp.priorityScore || 0;

    // Retention
    score +=
      retentionData
        ?.retentionScore || 0;

    let priority =
      "MÉDIA";

    if (score >= 180) {
      priority =
        "MÁXIMA";
    }

    else if (
      score >= 120
    ) {
      priority =
        "ALTA";
    }

    let action =
      "Monitorar";

    if (
      priority ===
      "MÁXIMA"
    ) {
      action =
        "POSTAR IMEDIATAMENTE";
    }

    else if (
      priority ===
      "ALTA"
    ) {
      action =
        "CRIAR VARIAÇÕES";
    }

    let riskLevel =
      "BAIXO";

    if (score <= 20) {
      riskLevel =
        "ALTO";
    }

    let reasoning =
      "Boa combinação entre trend e retenção.";

    if (
      priority ===
      "MÁXIMA"
    ) {
      reasoning =
        "Alta chance de viralização imediata.";
    }

    return {
      keyword:
        opp.keyword,

      decisionScore:
        Number(score.toFixed(2)),

      priority,

      action,

      riskLevel,

      reasoning,
    };
  });
}