import { VideoStructure }
from "./video-assembly.engine";

export interface VisualDirection {
  keyword: string;

  visualStyle: string;

  energyLevel: string;

  directions: {
    sceneType: string;

    camera: string;

    transition: string;

    textEffect: string;

    intensity: string;
  }[];
}

export function generateVisualDirection(
  videos: VideoStructure[]
): VisualDirection[] {

  return videos.map((video) => {

    const directions =
      video.scenes.map((scene) => {

        let camera =
          "STATIC";

        let transition =
          "CUT";

        let textEffect =
          "NONE";

        let intensity =
          "MÉDIA";

        // HOOK
        if (
          scene.type ===
          "HOOK"
        ) {
          camera =
            "FAST ZOOM";

          transition =
            "FLASH CUT";

          textEffect =
            "BIG POP TEXT";

          intensity =
            "EXTREMA";
        }

        // WOW
        else if (
          scene.type ===
          "WOW MOMENT"
        ) {
          camera =
            "CLOSE UP";

          transition =
            "SMOOTH MOTION";

          textEffect =
            "GLOW TEXT";

          intensity =
            "ALTA";
        }

        // DEMO
        else if (
          scene.type ===
          "DEMONSTRATION"
        ) {
          camera =
            "PRODUCT FOCUS";

          transition =
            "SWIPE";

          textEffect =
            "FEATURE TEXT";

          intensity =
            "MÉDIA";
        }

        // SOCIAL
        else if (
          scene.type ===
          "SOCIAL PROOF"
        ) {
          camera =
            "SCREENSHOT PAN";

          transition =
            "QUICK CUT";

          textEffect =
            "SOCIAL TEXT";

          intensity =
            "ALTA";
        }

        // CTA
        else if (
          scene.type ===
          "CTA"
        ) {
          camera =
            "CENTER ZOOM";

          transition =
            "IMPACT CUT";

          textEffect =
            "PULSE CTA";

          intensity =
            "EXTREMA";
        }

        return {
          sceneType:
            scene.type,

          camera,

          transition,

          textEffect,

          intensity,
        };
      });

    return {
      keyword:
        video.keyword,

      visualStyle:
        "HIGH RETENTION EDITING",

      energyLevel:
        "ALTA",

      directions,
    };
  });
}