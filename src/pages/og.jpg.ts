import type { APIRoute } from "astro";
import { renderOgImage } from "src/lib/og";

export const GET: APIRoute = async () =>
  new Response(
    await renderOgImage({
      kicker: "Serhii Babich",
      headline: "Senior Product Engineer",
      domain: "babich.dev",
    }),
    { headers: { "Content-Type": "image/jpeg" } },
  );
