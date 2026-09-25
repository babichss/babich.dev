import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { APIRoute } from "astro";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const TEXT_BLOCK_HEIGHT = 240;

// The 1200x630 og:image/twitter:image every page shares — the home
// portrait, smart-cropped to its most detailed region (the face), with a
// name/title overlay. Generated at build time; see BaseLayout.astro.
export const GET: APIRoute = async () => {
  const heroPath = fileURLToPath(
    new URL("../../assets/hero.webp", import.meta.url),
  );
  const heroBuffer = await readFile(heroPath);

  const overlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#000000" stop-opacity="0.82" />
      <stop offset="1" stop-color="#000000" stop-opacity="0" />
    </linearGradient>
  </defs>
  <rect x="0" y="${HEIGHT - TEXT_BLOCK_HEIGHT}" width="${WIDTH}" height="${TEXT_BLOCK_HEIGHT}" fill="url(#fade)" />
  <text x="56" y="${HEIGHT - 130}" font-family="sans-serif" font-size="56" font-weight="700" fill="#ffffff">Serhii Babich</text>
  <text x="56" y="${HEIGHT - 78}" font-family="sans-serif" font-size="32" fill="#ffffff">Senior Product Engineer</text>
</svg>`;

  const image = await sharp(heroBuffer)
    .resize(WIDTH, HEIGHT, {
      fit: "cover",
      position: sharp.strategy.attention,
    })
    .composite([{ input: Buffer.from(overlay) }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": "image/png" },
  });
};
