import googleTrends from "google-trends-api";

import { logger } from "../../lib/logger";

export async function collectRealGoogleTrends() {
  try {
    const response =
      await googleTrends.interestOverTime({
        keyword: [
          "gadgets",
          "setup gamer",
          "tecnologia",
          "smartwatch",
          "mouse gamer",
        ],

        geo: "BR",

        startTime: new Date(
          Date.now() - 1000 * 60 * 60 * 24 * 7
        ),
      });

    const data = JSON.parse(response);

    const timeline =
      data.default.timelineData;

    return timeline.map((item: any) => ({
      date: item.formattedTime,

      values: item.value,
    }));
  } catch (error) {
    logger.error(
      "Google Trends Collector Error"
    );

    logger.error(error);

    return [];
  }
}