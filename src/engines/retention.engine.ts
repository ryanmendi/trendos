import { VideoScene } from "../types/video-scene";

import { RetentionSceneAnalysis } from "../types/retention";

export function analyzeRetention(
  scenes: VideoScene[]
): RetentionSceneAnalysis[] {
  return scenes.map((scene) => {
    let score = 100;

    // DURAÇÃO
    if (scene.duration > 4) {
      score -= 25;
    }

    // BAIXA INTENSIDADE
    if (scene.intensityLevel < 7) {
      score -= 20;
    }

    // TRANSIÇÃO
    if (
      scene.transition ===
      "Simple Cut"
    ) {
      score -= 10;
    }

    let dropRisk = "Baixo";

    if (score < 60) {
      dropRisk = "ALTO";
    } else if (score < 80) {
      dropRisk = "MÉDIO";
    }

    let improvementSuggestion =
      "Estrutura boa.";

    if (dropRisk === "ALTO") {
      improvementSuggestion =
        "Adicionar cortes rápidos e emoção.";
    }

    if (dropRisk === "MÉDIO") {
      improvementSuggestion =
        "Melhorar intensidade visual.";
    }

    return {
      sceneOrder: scene.order,

      retentionScore: score,

      dropRisk,

      improvementSuggestion,
    };
  });
}