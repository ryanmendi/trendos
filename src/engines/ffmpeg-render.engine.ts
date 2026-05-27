import ffmpeg from "fluent-ffmpeg";
import path from "path";

ffmpeg.setFfmpegPath(
  "C:\\Users\\Mende\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe"
);

const inputPath = path.resolve(
  __dirname,
  "../../assets/test.mp4"
);

const outputPath = path.resolve(
  __dirname,
  "../../output/rendered.mp4"
);

export async function renderTestVideo() {

  return new Promise(
    (resolve, reject) => {

      ffmpeg()

        .input(inputPath)

        .videoFilters([
          "scale=720:1280",

          "drawtext=fontfile='C\\:/Windows/Fonts/arial.ttf':text='Esse produto esta viralizando':fontcolor=white:fontsize=42:box=1:boxcolor=black@0.6:boxborderw=20:x=(w-text_w)/2:y=h-250"
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