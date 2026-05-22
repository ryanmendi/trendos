import { GeneratedCaption } from "./ai-caption.engine";

export interface PlatformContent {
  platform: string;

  keyword: string;

  adaptedCaption: string;

  adaptedCTA: string;

  hashtags: string[];

  style: string;
}

export function adaptToPlatforms(
  captions: GeneratedCaption[]
): PlatformContent[] {

  const results:
    PlatformContent[] = [];

  for (const item of captions) {

    // TikTok
    results.push({
      platform: "TikTok",

      keyword:
        item.keyword,

      adaptedCaption:
        `${item.caption} Isso está ficando absurdo.`,

      adaptedCTA:
        "Segue para mais trends.",

      hashtags: [
        "#fyp",
        "#viral",
        "#tiktokmademebuyit",
      ],

      style:
        "FAST PACED",
    });

    // Shorts
    results.push({
      platform:
        "YouTube Shorts",

      keyword:
        item.keyword,

      adaptedCaption:
        `${item.caption} Veja até o final.`,

      adaptedCTA:
        "Inscreva-se para mais.",

      hashtags: [
        "#shorts",
        "#viral",
        "#tech",
      ],

      style:
        "HIGH RETENTION",
    });

    // Instagram
    results.push({
      platform:
        "Instagram Reels",

      keyword:
        item.keyword,

      adaptedCaption:
        `${item.caption} Compartilha com alguém.`,

      adaptedCTA:
        "Salva esse Reel.",

      hashtags: [
        "#reels",
        "#viral",
        "#gadgets",
      ],

      style:
        "SOCIAL ENGAGEMENT",
    });

    // Pinterest
    results.push({
      platform:
        "Pinterest",

      keyword:
        item.keyword,

      adaptedCaption:
        `${item.keyword} tendência 2026.`,

      adaptedCTA:
        "Veja mais ideias.",

      hashtags: [
        "#trend",
        "#shopping",
        "#gadgets",
      ],

      style:
        "SEARCH OPTIMIZED",
    });
  }

  return results;
}