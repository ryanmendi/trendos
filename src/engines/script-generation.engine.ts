import { GeneratedHook }
from "./hook-generation.engine";

export interface GeneratedScript {
  keyword: string;

  hook: string;

  body: string;

  cta: string;

  estimatedDuration: string;
}

const bodyTemplates = [
  "Esse produto começou a aparecer em todos os lugares essa semana.",

  "A quantidade de pessoas comprando isso aumentou absurdamente.",

  "Isso aqui resolve um problema que muita gente nem percebe.",

  "O mais impressionante é que quase ninguém conhecia isso antes.",

  "Esse produto está crescendo muito rápido nas redes sociais.",
];

const ctaTemplates = [
  "Comenta se você usaria isso.",

  "Salva esse vídeo para ver depois.",

  "Manda isso para alguém que precisa ver.",

  "Você compraria isso?",

  "Segue para mais produtos virais.",
];

export function generateScripts(
  hooks: GeneratedHook[]
): GeneratedScript[] {

  return hooks.map((item) => {

    const body =
      bodyTemplates[
        Math.floor(
          Math.random() *
          bodyTemplates.length
        )
      ];

    const cta =
      ctaTemplates[
        Math.floor(
          Math.random() *
          ctaTemplates.length
        )
      ];

    return {
      keyword:
        item.keyword,

      hook:
        item.hook,

      body,

      cta,

      estimatedDuration:
        "15-30s",
    };
  });
}