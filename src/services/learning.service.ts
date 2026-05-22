import { prisma }
from "../lib/prisma";

import { GeneratedScript }
from "../engines/script-generation.engine";

import { RetentionAnalysis }
from "../engines/retention-optimization.engine";

export async function saveLearningData(
  scripts: GeneratedScript[],

  retention:
    RetentionAnalysis[]
) {

  for (const script of scripts) {

    const retentionData =
      retention.find(
        (r) =>
          r.keyword ===
          script.keyword
      );

    await prisma.contentPerformance.create({
      data: {
        keyword:
          script.keyword,

        hook:
          script.hook,

        cta:
          script.cta,

        retentionScore:
          retentionData
            ?.retentionScore || 0,

        // MOCKS por enquanto
        views:
          Math.floor(
            Math.random() *
            100000
          ),

        likes:
          Math.floor(
            Math.random() *
            10000
          ),

        comments:
          Math.floor(
            Math.random() *
            1000
          ),

        shares:
          Math.floor(
            Math.random() *
            5000
          ),

        watchTime:
          Math.random() * 100,
      },
    });
  }
}