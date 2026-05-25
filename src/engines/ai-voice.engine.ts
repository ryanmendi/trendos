import { VideoStructure }
from "./video-assembly.engine";

export interface VoiceScene {
  sceneType: string;

  tone: string;

  speed: string;

  emotion: string;

  emphasis: string;

  pauseAfter: number;
}

export interface VoiceDirection {
  keyword: string;

  narratorStyle: string;

  audioEnergy: string;

  scenes: VoiceScene[];
}

export function generateVoiceDirection(
  videos: VideoStructure[]
): VoiceDirection[] {

  return videos.map((video) => {

    const scenes =
      video.scenes.map((scene) => {

        let tone =
          "NEUTRO";

        let speed =
          "MÉDIA";

        let emotion =
          "NORMAL";

        let emphasis =
          "NORMAL";

        let pauseAfter = 0.5;

        // HOOK
        if (
          scene.type ===
          "HOOK"
        ) {

          tone =
            "URGENTE";

          speed =
            "RÁPIDA";

          emotion =
            "SURPRESA";

          emphasis =
            "ALTA";

          pauseAfter = 0.2;
        }

        // WOW
        else if (
          scene.type ===
          "WOW MOMENT"
        ) {

          tone =
            "IMPACTANTE";

          speed =
            "MÉDIA";

          emotion =
            "CURIOSIDADE";

          emphasis =
            "ALTA";

          pauseAfter = 0.4;
        }

        // DEMONSTRAÇÃO
        else if (
          scene.type ===
          "DEMONSTRATION"
        ) {

          tone =
            "EXPLICATIVO";

          speed =
            "CONTROLADA";

          emotion =
            "CONFIANÇA";

          emphasis =
            "MÉDIA";

          pauseAfter = 0.5;
        }

        // SOCIAL PROOF
        else if (
          scene.type ===
          "SOCIAL PROOF"
        ) {

          tone =
            "CONVINCENTE";

          speed =
            "MÉDIA";

          emotion =
            "VALIDAÇÃO";

          emphasis =
            "ALTA";

          pauseAfter = 0.3;
        }

        // CTA
        else if (
          scene.type ===
          "CTA"
        ) {

          tone =
            "PERSUASIVO";

          speed =
            "RÁPIDA";

          emotion =
            "EMPOLGAÇÃO";

          emphasis =
            "EXTREMA";

          pauseAfter = 0.1;
        }

        return {
          sceneType:
            scene.type,

          tone,

          speed,

          emotion,

          emphasis,

          pauseAfter,
        };
      });

    return {
      keyword:
        video.keyword,

      narratorStyle:
        "VIRAL SHORT FORM",

      audioEnergy:
        "ALTA",

      scenes,
    };
  });
}