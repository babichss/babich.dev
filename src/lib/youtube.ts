export const getVideoId = (href: string) => {
  const url = new URL(href);

  if (url.hostname === "youtu.be") {
    return url.pathname.slice(1);
  }

  const pathMatch = url.pathname.match(/^\/(?:embed|live|shorts)\/([^/]+)/);
  if (pathMatch) {
    return pathMatch[1];
  }

  return url.searchParams.get("v");
};
