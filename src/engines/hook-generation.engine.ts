import { QueueItem }
from "./smart-queue.engine";

export interface GeneratedHook {
  keyword: string;

  hookType: string;

  hook: string;

  retentionPotential: string;
}

const hookTemplates = [
  {
    type: "Curiosity",

    template:
      "VOCÊ NÃO VAI ACREDITAR nesse {keyword}",
  },

  {
    type: "Shock",

    template:
      "Isso aqui está VIRALIZANDO por um motivo...",
  },

  {
    type: "Problem",

    template:
      "Todo mundo está comprando isso antes que acabe.",
  },

  {
    type: "Urgency",

    template:
      "Se eu fosse você, testaria isso HOJE.",
  },

  {
    type: "Review",

    template:
      "O TikTok me convenceu a comprar isso...",
  },
];

export function generateHooks(
  queue: QueueItem[]
): GeneratedHook[] {

  return queue.map((item) => {

    const randomHook =
      hookTemplates[
        Math.floor(
          Math.random() *
          hookTemplates.length
        )
      ];

    const hook =
      randomHook.template.replace(
        "{keyword}",
        item.keyword
      );

    let retentionPotential =
      "MÉDIO";

    if (
      item.priorityLevel ===
      "CRÍTICA"
    ) {
      retentionPotential =
        "EXTREMO";
    }

    else if (
      item.priorityLevel ===
      "ALTA"
    ) {
      retentionPotential =
        "ALTO";
    }

    return {
      keyword:
        item.keyword,

      hookType:
        randomHook.type,

      hook,

      retentionPotential,
    };
  });
}