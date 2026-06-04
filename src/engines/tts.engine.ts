import { exec } from "child_process";
import path from "path";
import fs from "fs";

export async function generateNarration(
  keyword: string,
  text: string
): Promise<string> {

  const outputDir = path.resolve(
    __dirname,
    "../../output/audio"
  );

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {
      recursive: true
    });
  }

  const audioPath = path.join(
    outputDir,
    `${keyword}.mp3`
  );

  const command = [
    "py",
    "-m",
    "edge_tts",
    `--text "${text}"`,
    "--voice pt-BR-AntonioNeural",
    `--write-media "${audioPath}"`
  ].join(" ");

  return new Promise(
    (resolve, reject) => {

      exec(
        command,
        (error) => {

          if (error) {
            reject(error);
            return;
          }

          console.log(
            `Audio generated: ${audioPath}`
          );

          resolve(audioPath);
        }
      );
    }
  );
}