import { logger } from "../lib/logger";
import { collectRealGoogleTrends } from "../collectors/trends/google-trends-real.collector";
import { analyzeRealTrendGrowth } from "../engines/real-trend-growth.engine";
import { saveTrendSnapshots } from "../services/trend-memory.service";
import { predictTrendExplosion } from "../engines/explosion-prediction.engine";
import { rankTrendOpportunities } from "../engines/opportunity-ranking.engine";
import { buildSmartQueue } from "../engines/smart-queue.engine";
import { generateHooks } from "../engines/hook-generation.engine";
import { generateScripts } from "../engines/script-generation.engine";
import { generateCaptions } from "../engines/ai-caption.engine";
import {  analyzeCompetitors } from "../engines/competitor-intelligence.engine";
import {  competitorVideos } from "../mocks/competitor-videos";

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

if (
  !realTrends ||
  realTrends.length === 0
) {
  logger.warn(
    "No trend data collected"
  );

  return;
}

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

logger.info(
  "Building smart queue"
);

const smartQueue =
  buildSmartQueue(
    rankedOpportunities
  );

console.table(smartQueue);

logger.info(
  "Generating viral hooks"
);

const hooks =
  generateHooks(
    smartQueue
  );

console.table(hooks);
logger.info(
  "Generating scripts"
);

const scripts =
  generateScripts(hooks);

console.table(scripts);

logger.info(
  "Generating captions"
);

const captions =
  generateCaptions(
    scripts
  );

console.table(captions);

logger.info(
  "Analyzing competitors"
);

const competitorInsights =
  analyzeCompetitors(
    competitorVideos
  );

console.table(
  competitorInsights
);
}