import { TrendKeyword } from "../../types/trend";

export async function collectGoogleTrends(): Promise<TrendKeyword[]> {
  return [
    {
      keyword: "setup gamer",
      growthPercentage: 320,
      searchVolume: 120000,
      category: "gaming",
    },

    {
      keyword: "mini printer",
      growthPercentage: 450,
      searchVolume: 95000,
      category: "gadgets",
    },

    {
      keyword: "rgb lights",
      growthPercentage: 280,
      searchVolume: 87000,
      category: "setup",
    },

    {
      keyword: "wireless headset",
      growthPercentage: 190,
      searchVolume: 76000,
      category: "audio",
    },
  ];
}