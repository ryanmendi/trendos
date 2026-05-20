import { logger } from "../lib/logger";
import { collectRealGoogleTrends } from "../collectors/trends/google-trends-real.collector";
import { analyzeRealTrendGrowth } from "../engines/real-trend-growth.engine";
import { saveTrendSnapshots } from "../services/trend-memory.service";
import { predictTrendExplosion } from "../engines/explosion-prediction.engine";
import { rankTrendOpportunities } from "../engines/opportunity-ranking.engine";

export async function runTrendOS() {
  logger.info("TrendOS Pipeline Started");

  try {
    // ETAPAS FUTURAS
  } catch (error) {
    logger.error("Pipeline Error:", error);
  }

  logger.info(
  "Collecting REAL Google Trends"
);

const realTrends =
  await collectRealGoogleTrends();

console.table(realTrends);


logger.info(
  "Analyzing REAL trend growth"
);

const growthAnalysis =
  analyzeRealTrendGrowth(
    realTrends
  );

console.table(growthAnalysis);


logger.info(
  "Saving trend snapshots"
);

await saveTrendSnapshots(
  growthAnalysis
);

logger.info(
  "Predicting trend explosions"
);

const predictions =
  predictTrendExplosion(
    growthAnalysis
  );

console.table(predictions);

logger.info(
  "Ranking opportunities"
);

const rankedOpportunities =
  rankTrendOpportunities(
    predictions
  );

console.table(
  rankedOpportunities
);
}