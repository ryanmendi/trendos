import { CompetitorVideo } from "../../types/competitor";

export async function collectCompetitorVideos(): Promise<
  CompetitorVideo[]
> {
  return [
    {
      creator: "viraltech",
      title:
        "Esse gadget está viralizando MUITO",

      views: 1200000,

      likes: 98000,

      comments: 1200,

      shares: 8200,

      duration: 21,

      hook:
        "Esse gadget está viralizando MUITO 🔥",

      hashtags: [
        "#gadgets",
        "#tiktokmademebuyit",
        "#viral",
      ],

      platform: "TikTok",
    },

    {
      creator: "setupmania",
      title:
        "Olha esse setup gamer absurdo",

      views: 890000,

      likes: 74000,

      comments: 980,

      shares: 6500,

      duration: 18,

      hook:
        "Olha esse setup gamer absurdo 😳",

      hashtags: [
        "#setupgamer",
        "#rgb",
        "#gaming",
      ],

      platform: "TikTok",
    },
  ];
}