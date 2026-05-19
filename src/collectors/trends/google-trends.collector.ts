import { TrendKeyword } from "../../types/trend";

export async function collectGoogleTrends(): Promise<TrendKeyword[]> {
  return [
    {
      keyword: "setup gamer",
growthPercentage:
  320 + Math.floor(Math.random() * 80),

searchVolume:
  120000 + Math.floor(Math.random() * 50000),
      category: "gaming",
    },

    {
      keyword: "mini printer",
growthPercentage:
  320 + Math.floor(Math.random() * 80),

searchVolume:
  120000 + Math.floor(Math.random() * 50000),
      category: "gadgets",
    },

    {
      keyword: "rgb lights",
growthPercentage:
  280 + Math.floor(Math.random() * 70),

searchVolume:
  87000 + Math.floor(Math.random() * 20000),
      category: "setup",
    },

    {
      keyword: "wireless headset",
growthPercentage:
  320 + Math.floor(Math.random() * 80),

searchVolume:
  120000 + Math.floor(Math.random() * 50000),
      category: "audio",
    },
  ];
}