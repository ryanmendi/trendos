import fs from "fs";
import path from "path";

export function getBackgroundVideo(
  keyword: string
): string {

  const normalizedKeyword =
    keyword
      .toLowerCase()
      .trim();

  const backgroundsDir =
    path.resolve(
      __dirname,
      "../../assets/backgrounds"
    );

  const specificVideo =
    path.join(
      backgroundsDir,
      `${normalizedKeyword}.mp4`
    );

  const defaultVideo =
    path.join(
      backgroundsDir,
      "default.mp4"
    );

  if (
    fs.existsSync(
      specificVideo
    )
  ) {
    return specificVideo;
  }

  return defaultVideo;
}