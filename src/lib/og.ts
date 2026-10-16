import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 72;

// Dark-mode tokens from src/styles/tokens.css: --bg, --text-strong,
// --text-2, --accent.
const BACKGROUND = "#141a23";
const TEXT_PRIMARY = "#eef1f5";
const TEXT_SECONDARY = "#a4adba";
const TEXT_ACCENT = "#5e9bff";

const KICKER_SIZE = 34;
const DOMAIN_SIZE = 30;
const HEADLINE_SIZES = [80, 68, 64, 60];
const HEADLINE_LINE_HEIGHT = 1.05;
const HEADLINE_LETTER_SPACING_EM = -0.03;
const HEADLINE_MAX_LINES = 3;
const KICKER_GAP = 24;
const DOMAIN_GAP = 48;

// Resolved from the project root: the bundled build moves this module, so
// a path relative to import.meta.url is not stable.
const fontFile = (name: string) =>
  join(process.cwd(), "src/assets/fonts", name);
const REGULAR = fontFile("GoogleSans-Regular.ttf");
const MEDIUM = fontFile("GoogleSans-Medium.ttf");
const PORTRAIT_FILE = join(process.cwd(), "assets/portrait.jpg");

const escapeMarkup = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Each font file is a static instance of one weight. fontconfig only
// selects the Medium file when the markup also asks for weight 500;
// family "Google Sans Medium" matches nothing and falls back to another font.
async function renderLine(
  text: string,
  size: number,
  fontfile: string,
  color: string,
  letterSpacingEm = 0,
) {
  const spacing = Math.round(letterSpacingEm * size * 1024);
  const attrs = [
    `font_family="Google Sans"`,
    `weight="${fontfile === MEDIUM ? 500 : 400}"`,
    `size="${size * 1024}"`,
    `foreground="${color}"`,
    spacing ? `letter_spacing="${spacing}"` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const { data, info } = await sharp({
    text: {
      text: `<span ${attrs}>${escapeMarkup(text)}</span>`,
      fontfile,
      dpi: 72,
      rgba: true,
    },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { input: data, width: info.width, height: info.height };
}

type Line = Awaited<ReturnType<typeof renderLine>>;

// Pango ignores line-height, so the headline is wrapped greedily and each
// line rendered on its own.
async function wrapHeadline(headline: string, size: number, maxWidth: number) {
  const render = (text: string) =>
    renderLine(text, size, MEDIUM, TEXT_PRIMARY, HEADLINE_LETTER_SPACING_EM);
  const lines: Line[] = [];
  let current = "";
  for (const word of headline.split(/\s+/)) {
    const candidate = current ? `${current} ${word}` : word;
    if (current && (await render(candidate)).width > maxWidth) {
      lines.push(await render(current));
      current = word;
    } else {
      current = candidate;
    }
  }
  lines.push(await render(current));
  return lines;
}

// The 1200x630 share card: full-height portrait on the left, text panel on
// the right.
export async function renderOgImage(card: {
  kicker: string;
  headline: string;
  domain: string;
}): Promise<Uint8Array<ArrayBuffer>> {
  const { data: portrait, info } = await sharp(await readFile(PORTRAIT_FILE))
    .resize({ height: HEIGHT })
    .toBuffer({ resolveWithObject: true });

  const textLeft = info.width + PADDING;
  const columnWidth = WIDTH - PADDING - textLeft;

  const kicker = await renderLine(
    card.kicker,
    KICKER_SIZE,
    MEDIUM,
    TEXT_SECONDARY,
  );
  const domain = await renderLine(
    card.domain,
    DOMAIN_SIZE,
    REGULAR,
    TEXT_ACCENT,
  );
  const domainTop = HEIGHT - PADDING - domain.height;
  const available = domainTop - DOMAIN_GAP - PADDING;

  let size = HEADLINE_SIZES[0];
  let lines: Line[] = [];
  for (const candidate of HEADLINE_SIZES) {
    size = candidate;
    lines = await wrapHeadline(card.headline, size, columnWidth);
    const groupHeight =
      kicker.height +
      KICKER_GAP +
      Math.round(lines.length * size * HEADLINE_LINE_HEIGHT);
    if (lines.length <= HEADLINE_MAX_LINES && groupHeight <= available) break;
  }

  const pitch = size * HEADLINE_LINE_HEIGHT;
  const groupHeight = kicker.height + KICKER_GAP + lines.length * pitch;
  const groupTop =
    PADDING + Math.round(Math.max(0, (available - groupHeight) / 2));
  const headlineTop = groupTop + kicker.height + KICKER_GAP;

  const layers: sharp.OverlayOptions[] = [
    { input: portrait, left: 0, top: 0 },
    { input: kicker.input, left: textLeft, top: groupTop },
    ...lines.map((line, i) => ({
      input: line.input,
      left: textLeft,
      top: Math.round(headlineTop + i * pitch),
    })),
    { input: domain.input, left: textLeft, top: domainTop },
  ];

  const image = await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: BACKGROUND,
    },
  })
    .composite(layers)
    .jpeg({
      quality: 76,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:4:4",
    })
    .toBuffer();
  return new Uint8Array(image);
}
