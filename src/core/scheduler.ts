import cron from "node-cron";

import { logger } from "../lib/logger";

import { runTrendOS } from "./trendos.pipeline";

export function startScheduler() {
  logger.info(
    "Scheduler started"
  );

  cron.schedule("*/2 * * * *", async () => {
    logger.info(
      "Running automated TrendOS cycle"
    );

    await runTrendOS();
  });
}