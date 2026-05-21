import { GeneratedScript }
from "./script-generation.engine";

export interface GeneratedCaption {
  keyword: string;

  caption: string;

  hashtags: string[];

  seoKeywords: string[];

  engagementCTA: string;
}

const captionTemplates = [
  "Esse produto está aparecendo em todo lugar.",

  "Agora eu entendi por que isso viralizou.",

  "O TikTok realmente acertou nessa.",

  "Isso aqui está ficando absurdo de popular.",

  "Mais um produto que explodiu nas redes.",
];

const engagementTemplates = [
  "Você compraria isso?",

  "Salva esse vídeo.",

  "Marca alguém que precisa ver isso.",

  "Comenta sua opinião.",

  "Você usaria isso?",
];

export function generateCaptions(
  scripts: GeneratedScript[]
): GeneratedCaption[] {

  return scripts.map((script) => {

    const caption =
      captionTemplates[
        Math.floor(
          Math.random() *
          captionTemplates.length
        )
      ];

    const engagementCTA =
      engagementTemplates[
        Math.floor(
          Math.random() *
          engagementTemplates.length
        )
      ];

    const hashtags = [
      "#viral",
      "#tiktokmademebuyit",
      "#gadgets",
      "#tech",
      "#trend",
      `#${script.keyword
        .replace(/\s+/g, "")}`,
    ];

    const seoKeywords = [
      script.keyword,
      "produto viral",
      "trend",
      "viral do tiktok",
      "gadgets",
    ];

    return {
      keyword:
        script.keyword,

      caption,

      hashtags,

      seoKeywords,

      engagementCTA,
    };
  });
}