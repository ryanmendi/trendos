export interface VideoScript {
  start: number;

  end: number;

  text: string;
}

export interface GeneratedContent {
  hook: string;

  body: string;

  cta: string;
}

export function buildVideoScript(
  content: GeneratedContent
): VideoScript[] {

  return [

    {
      start: 0,
      end: 2.5,

      text: content.hook
    },

    {
      start: 2.5,
      end: 5.5,

      text: content.body
    },

    {
      start: 5.5,
      end: 8,

      text: content.cta
    }
  ];
}