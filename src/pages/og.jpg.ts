import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { APIRoute } from "astro";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
// The site's dark-mode tokens (src/styles/tokens.css): --bg,
// --text-strong, --accent.
const PANEL_BACKGROUND = "#141a23";
const TEXT_PRIMARY = "#eef1f5";
const TEXT_ACCENT = "#5e9bff";

// The 1200x630 og:image/twitter:image every page shares: the home
// portrait at full height on the left, uncropped, next to a solid panel
// carrying name/title/domain. Generated at build time; see BaseLayout.astro.
export const GET: APIRoute = async () => {
  const heroPath = fileURLToPath(
    new URL("../../assets/portrait.jpg", import.meta.url),
  );
  const heroBuffer = await readFile(heroPath);

  const { data: portrait, info: portraitInfo } = await sharp(heroBuffer)
    .resize({ height: HEIGHT })
    .toBuffer({ resolveWithObject: true });

  const textX = portraitInfo.width + 64;
  const overlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <text x="${textX}" y="290" font-family="sans-serif" font-size="44" font-weight="700" fill="${TEXT_PRIMARY}">Serhii Babich</text>
  <text x="${textX}" y="336" font-family="sans-serif" font-size="26" fill="${TEXT_PRIMARY}">Senior Product Engineer</text>
  <text x="${textX}" y="372" font-family="sans-serif" font-size="20" fill="${TEXT_ACCENT}">babich.dev</text>
</svg>`;

  const image = await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: PANEL_BACKGROUND,
    },
  })
    .composite([
      { input: portrait, left: 0, top: 0 },
      { input: Buffer.from(overlay), left: 0, top: 0 },
    ])
    .jpeg({ quality: 82 })
    .toBuffer();

  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
