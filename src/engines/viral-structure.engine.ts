import { CompetitorVideo } from "../types/competitor";

import { ViralStructure } from "../types/viral-structure";

export function extractViralStructure(
  video: CompetitorVideo
): ViralStructure {
  let hookPattern = "Padrão simples";

  const emotionalTriggers: string[] =
    [];

  // HOOKS
  if (
    video.hook.includes(
      "viralizando"
    )
  ) {
    hookPattern =
      "Trend Explosion Hook";
  }

  if (
    video.hook.includes("absurdo")
  ) {
    hookPattern =
      "Shock Reaction Hook";
  }

  // GATILHOS
  if (video.hook.includes("🔥")) {
    emotionalTriggers.push(
      "Excitação"
    );
  }

  if (video.hook.includes("😳")) {
    emotionalTriggers.push(
      "Surpresa"
    );
  }

  const videoFlow = [
    "Hook agressivo",
    "Produto imediato",
    "Demonstração rápida",
    "Wow effect",
    "CTA urgente",
  ];

  let ctaStyle = "Moderado";

  if (video.shares > 5000) {
    ctaStyle = "Urgência forte";
  }

  const estimatedViralScore =
    emotionalTriggers.length *
      25 +
    video.shares / 100 +
    video.likes / 1000;

  return {
    structureName:
      `${hookPattern} Structure`,

    hookPattern,

    videoFlow,

    emotionalTriggers,

    ctaStyle,

    estimatedViralScore:
      Number(
        estimatedViralScore.toFixed(2)
      ),
  };
}