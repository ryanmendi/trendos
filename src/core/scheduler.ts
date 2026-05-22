import cron from "node-cron";

import { logger } from "../lib/logger";

import { runTrendOS } from "./trendos.pipeline";

export function startScheduler() {
  logger.info(
    "Scheduler started"
  );

  cron.schedule("*/1q * * * *", async () => {
    logger.info(
      "Running automated TrendOS cycle"
    );

    await runTrendOS();
  });
}