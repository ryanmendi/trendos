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

        .output(outputPath)

        .videoFilters(
          "scale=720:1280"
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


