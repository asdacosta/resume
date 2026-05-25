import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Image, Frame, GIF } from "imagescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const framesDir = path.join(__dirname, "..", "docs", "media", "frames");
const outGif = path.join(__dirname, "..", "docs", "media", "live.gif");

const files = (await readdir(framesDir))
  .filter((f) => f.endsWith(".png"))
  .sort();

const images = await Promise.all(
  files.map(async (file) => {
    const buf = await readFile(path.join(framesDir, file));
    const img = await Image.decode(buf);
    return img.resize(960, Math.round((img.height / img.width) * 960));
  }),
);

const frames = images.map((img) => Frame.from(img, 700));
const gif = new GIF(frames, 0);
const encoded = await gif.encode();
await writeFile(outGif, encoded);
console.log(`Wrote ${outGif} (${files.length} frames)`);
