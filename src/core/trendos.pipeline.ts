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
import { analyzeCompetitors } from "../engines/competitor-intelligence.engine";
import { competitorVideos } from "../mocks/competitor-videos";
import { optimizeRetention } from "../engines/retention-optimization.engine";
import { saveLearningData } from "../services/learning.service";
import { analyzeLearning } from "../engines/learning-analytics.engine";
import { makeAIDecisions } from "../engines/ai-decision.engine";
import { adaptToPlatforms } from "../engines/multi-platform.engine";
import { buildVideoStructures } from "../engines/video-assembly.engine";

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

logger.info(
  "Optimizing retention"
);

const retentionAnalysis =
  optimizeRetention(
    scripts
  );

console.table(
  retentionAnalysis
);

logger.info(
  "Saving learning data"
);

await saveLearningData(
  scripts,
  retentionAnalysis
);

logger.info(
  "Analyzing learning data"
);

const learningInsights =
  await analyzeLearning();

console.dir(
  learningInsights,
  {
    depth: null,
    colors: true,
  }
);

logger.info(
  "Running AI decisions"
);

const decisions =
  makeAIDecisions(
    rankedOpportunities,
    retentionAnalysis
  );

console.table(
  decisions
);

logger.info(
  "Adapting content to platforms"
);

const platformContent =
  adaptToPlatforms(
    captions
  );

console.dir(
  platformContent,
  {
    depth: null,
    colors: true,
  }
);

logger.info(
  "Building video structures"
);

const videoStructures =
  buildVideoStructures(
    scripts
  );

console.dir(
  videoStructures,
  {
    depth: null,
    colors: true,
  }
);
}