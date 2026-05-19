import { CompetitorVideo } from "../types/competitor";

export interface CompetitorAnalysis {
  creator: string;

  viralScore: number;

  engagementRate: number;

  hookStrength: number;

  formatPotential: number;
}

export function analyzeCompetitorVideo(
  video: CompetitorVideo
): CompetitorAnalysis {
  const engagementRate =
    ((video.likes +
      video.comments +
      video.shares) /
      video.views) *
    100;

  let hookStrength = 0;

  if (
    video.hook.includes("viralizando")
  ) {
    hookStrength += 30;
  }

  if (
    video.hook.includes("absurdo")
  ) {
    hookStrength += 25;
  }

  if (
    video.hook.includes("😳") ||
    video.hook.includes("🔥")
  ) {
    hookStrength += 20;
  }

  let formatPotential = 0;

  // SHORT FORM IDEAL
  if (video.duration <= 25) {
    formatPotential += 40;
  }

  // MUITOS SHARES
  if (video.shares > 5000) {
    formatPotential += 40;
  }

  const viralScore =
    engagementRate * 2 +
    hookStrength +
    formatPotential;

  return {
    creator: video.creator,

    engagementRate:
      Number(
        engagementRate.toFixed(2)
      ),

    hookStrength,

    formatPotential,

    viralScore:
      Number(viralScore.toFixed(2)),
  };
}