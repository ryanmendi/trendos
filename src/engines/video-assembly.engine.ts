import { GeneratedScript } from "./script-generation.engine";

export interface VideoScene {
  type: string;

  duration: number;

  text: string;

  objective: string;
}

export interface VideoStructure {
  keyword: string;

  totalDuration: number;

  style: string;

  scenes: VideoScene[];
}

export function buildVideoStructures(
  scripts: GeneratedScript[]
): VideoStructure[] {

  return scripts.map((script) => {

    const scenes:
      VideoScene[] = [

      {
        type: "HOOK",

        duration: 3,

        text:
          script.hook,

        objective:
          "Capturar atenção imediata",
      },

      {
        type:
          "WOW MOMENT",

        duration: 5,

        text:
          "Mostrar o efeito visual do produto.",

        objective:
          "Gerar curiosidade",
      },

      {
        type:
          "DEMONSTRATION",

        duration: 8,

        text:
          script.body,

        objective:
          "Mostrar utilidade",
      },

      {
        type:
          "SOCIAL PROOF",

        duration: 5,

        text:
          "Esse produto está viralizando.",

        objective:
          "Gerar validação social",
      },

      {
        type: "CTA",

        duration: 4,

        text:
          script.cta,

        objective:
          "Gerar ação",
      },
    ];

    const totalDuration =
      scenes.reduce(
        (acc, scene) =>
          acc + scene.duration,
        0
      );

    return {
      keyword:
        script.keyword,

      totalDuration,

      style:
        "HIGH RETENTION",

      scenes,
    };
  });
}