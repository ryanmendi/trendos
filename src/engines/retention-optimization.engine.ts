import { GeneratedScript }
from "./script-generation.engine";

export interface RetentionAnalysis {
  keyword: string;

  retentionScore: number;

  replayPotential: string;

  watchTimeEstimate: string;

  scrollStopPower: string;

  recommendation: string;
}

export function optimizeRetention(
  scripts: GeneratedScript[]
): RetentionAnalysis[] {

  return scripts.map((script) => {

    let score = 0;

    // Hook forte
    if (
      script.hook.includes(
        "VOCÊ NÃO VAI ACREDITAR"
      )
    ) {
      score += 40;
    }

    if (
      script.hook.includes(
        "VIRALIZANDO"
      )
    ) {
      score += 35;
    }

    if (
      script.hook.includes(
        "HOJE"
      )
    ) {
      score += 25;
    }

    // CTA ajuda retenção
    if (
      script.cta.includes(
        "Comenta"
      )
    ) {
      score += 15;
    }

    if (
      script.cta.includes(
        "Salva"
      )
    ) {
      score += 20;
    }

    // Shorts ideais
    if (
      script.estimatedDuration ===
      "15-30s"
    ) {
      score += 30;
    }

    let replayPotential =
      "MÉDIO";

    if (score >= 90) {
      replayPotential =
        "EXTREMO";
    }

    else if (
      score >= 70
    ) {
      replayPotential =
        "ALTO";
    }

    let watchTimeEstimate =
      "MÉDIO";

    if (score >= 90) {
      watchTimeEstimate =
        "85%+";
    }

    else if (
      score >= 70
    ) {
      watchTimeEstimate =
        "70%+";
    }

    let scrollStopPower =
      "MÉDIO";

    if (score >= 85) {
      scrollStopPower =
        "FORTE";
    }

    let recommendation =
      "Monitorar";

    if (
      replayPotential ===
      "EXTREMO"
    ) {
      recommendation =
        "PRIORIDADE MÁXIMA";
    }

    return {
      keyword:
        script.keyword,

      retentionScore:
        Number(score.toFixed(2)),

      replayPotential,

      watchTimeEstimate,

      scrollStopPower,

      recommendation,
    };
  });
}