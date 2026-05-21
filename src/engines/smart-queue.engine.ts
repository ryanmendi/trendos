import { RankedOpportunity }
from "./opportunity-ranking.engine";

export interface QueueItem {
  keyword: string;

  priorityLevel: string;

  scheduledAction: string;

  estimatedDelay: string;

  queueScore: number;
}

export function buildSmartQueue(
  opportunities: RankedOpportunity[]
): QueueItem[] {

  return opportunities.map(
    (item, index) => {

      let scheduledAction =
        "Monitorar";

      let estimatedDelay =
        "24h";

      if (
        item.priorityLevel ===
        "CRÍTICA"
      ) {
        scheduledAction =
          "Postar imediatamente";

        estimatedDelay =
          "AGORA";
      }

      else if (
        item.priorityLevel ===
        "ALTA"
      ) {
        scheduledAction =
          "Postar hoje";

        estimatedDelay =
          `${index + 1}h`;
      }

      else if (
        item.priorityLevel ===
        "MÉDIA"
      ) {
        scheduledAction =
          "Agendar";

        estimatedDelay =
          "6h";
      }

      return {
        keyword:
          item.keyword,

        priorityLevel:
          item.priorityLevel,

        scheduledAction,

        estimatedDelay,

        queueScore:
          item.priorityScore,
      };
    }
  );
}