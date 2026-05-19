interface PatternAnalysis {
  curiosityScore: number;
  urgencyScore: number;
  emotionalScore: number;
  viralStructureScore: number;

  finalPatternScore: number;
}

export function analyzeViralPattern(
  text: string
): PatternAnalysis {
  const content = text.toLowerCase();

  let curiosityScore = 0;
  let urgencyScore = 0;
  let emotionalScore = 0;
  let viralStructureScore = 0;

  // CURIOSIDADE
  const curiosityWords = [
    "não vai acreditar",
    "absurdo",
    "insano",
    "viralizando",
    "descobri",
    "olha isso",
  ];

  // URGÊNCIA
  const urgencyWords = [
    "corre",
    "agora",
    "acabando",
    "últimas unidades",
    "rápido",
  ];

  // EMOCIONAL
  const emotionalWords = [
    "😳",
    "🔥",
    "🤯",
    "🚀",
    "absurdo",
  ];

  for (const word of curiosityWords) {
    if (content.includes(word)) {
      curiosityScore += 20;
    }
  }

  for (const word of urgencyWords) {
    if (content.includes(word)) {
      urgencyScore += 20;
    }
  }

  for (const word of emotionalWords) {
    if (content.includes(word)) {
      emotionalScore += 15;
    }
  }

  // ESTRUTURA VIRAL
  if (content.includes("🔥")) {
    viralStructureScore += 20;
  }

  if (content.includes("💰")) {
    viralStructureScore += 20;
  }

  if (content.includes("⭐")) {
    viralStructureScore += 20;
  }

  const finalPatternScore =
    curiosityScore +
    urgencyScore +
    emotionalScore +
    viralStructureScore;

  return {
    curiosityScore,
    urgencyScore,
    emotionalScore,
    viralStructureScore,
    finalPatternScore,
  };
}