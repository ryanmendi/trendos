import ffmpeg from "fluent-ffmpeg";
import path from "path";

ffmpeg.setFfmpegPath(
  "C:\\Users\\Mende\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe"
);

interface VideoScene {
  text: string;
  start: number;
  end: number;
}

function sanitizeText(
  text: string
) {

  return text

    .replace(/:/g, "\\:")

    .replace(/'/g, "\\'")

    .replace(/"/g, '\\"');
}

export async function renderTestVideo(
  script: VideoScene[]
) {

  const inputPath =
    path.resolve(
      __dirname,
      "../../assets/test.mp4"
    );

  const outputPath =
    path.resolve(
      __dirname,
      "../../output/rendered.mp4"
    );

  const fontPath =
    "assets/fonts/arial.ttf";

  const filters: string[] = [];

  filters.push(
    "scale=720:1280"
  );

  for (const scene of script) {

    const safeText =
      sanitizeText(
        scene.text
      );

    filters.push(

      `drawtext=fontfile='${fontPath}':text='${safeText}':fontcolor=white:fontsize=42:box=1:boxcolor=black@0.6:boxborderw=20:x=(w-text_w)/2:y=h-250:enable='between(t,${scene.start},${scene.end})'`
    );
  }

  return new Promise(
    (resolve, reject) => {

      ffmpeg()

ffmpeg()

  .input(inputPath)

  .complexFilter(
    filters.join(",")
  )

  .outputOptions([
    "-preset fast",
    "-pix_fmt yuv420p"
  ])

  .output(outputPath)

        .on(
          "start",
          (commandLine) => {

            console.log(
              "FFmpeg command:"
            );

            console.log(
              commandLine
            );
          }
        )

        .on(
          "end",
          () => {

            console.log(
              "Video rendered successfully"
            );

            resolve(true);
          }
        )

        .on(
          "error",
          (err) => {

            console.error(err);

            reject(err);
          }
        )

        .run();
    }
  );
}