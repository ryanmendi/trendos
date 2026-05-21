export interface CompetitorVideo {
  title: string;

  views: number;

  likes: number;

  comments: number;

  duration: number;

  hookStyle: string;

  hashtags: string[];
}

export interface CompetitorInsight {
  title: string;

  viralScore: number;

  performanceLevel: string;

  recommendation: string;
}

export function analyzeCompetitors(
  videos: CompetitorVideo[]
): CompetitorInsight[] {

  return videos.map((video) => {

    let score = 0;

    // Views
    score += video.views / 10000;

    // Likes
    score += video.likes / 1000;

    // Comments
    score += video.comments / 100;

    // Shorts performam melhor
    if (video.duration <= 30) {
      score += 30;
    }

    // Hook forte
    if (
      video.hookStyle ===
      "shock"
    ) {
      score += 40;
    }

    if (
      video.hookStyle ===
      "curiosity"
    ) {
      score += 25;
    }

    let performanceLevel =
      "MÉDIO";

    if (score >= 120) {
      performanceLevel =
        "EXTREMO";
    }

    else if (
      score >= 80
    ) {
      performanceLevel =
        "ALTO";
    }

    let recommendation =
      "Monitorar formato";

    if (
      performanceLevel ===
      "EXTREMO"
    ) {
      recommendation =
        "REPLICAR ESTRUTURA";
    }

    return {
      title: video.title,

      viralScore:
        Number(score.toFixed(2)),

      performanceLevel,

      recommendation,
    };
  });
}