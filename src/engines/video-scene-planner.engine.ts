import { ViralScript } from "../types/script";

import { VideoScene } from "../types/video-scene";

export function planVideoScenes(
  script: ViralScript
): VideoScene[] {
  const scenes: VideoScene[] = [];

  let order = 1;

  // HOOK
  scenes.push({
    order: order++,

    duration: 2,

    description:
      script.hook,

    transition:
      "Flash Cut",

    intensityLevel: 10,
  });

  // CENAS
  for (const step of script.scenes) {
    scenes.push({
      order: order++,

      duration: 3,

      description: step,

      transition:
        "Quick Zoom",

      intensityLevel: 8,
    });
  }

  // CTA
  scenes.push({
    order: order++,

    duration: 2,

    description: script.cta,

    transition:
      "Hard Cut",

    intensityLevel: 9,
  });

  return scenes;
}