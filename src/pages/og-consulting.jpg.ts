import type { APIRoute } from "astro";
import { renderOgImage } from "src/lib/og";

export const GET: APIRoute = async () =>
  new Response(
    await renderOgImage({
      kicker: "Serhii Babich",
      headline: "Independent technical interviews",
      domain: "babich.dev/consulting",
    }),
    { headers: { "Content-Type": "image/jpeg" } },
  );
