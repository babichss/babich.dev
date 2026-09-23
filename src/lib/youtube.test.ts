import { describe, expect, it } from "vitest";
import { getVideoId } from "src/lib/youtube";

describe("getVideoId", () => {
  it("reads the id from a youtu.be short link", () => {
    expect(getVideoId("https://youtu.be/XCPPTNBNKB4")).toBe("XCPPTNBNKB4");
  });

  it("reads the id from a watch?v= url", () => {
    expect(getVideoId("https://www.youtube.com/watch?v=XCPPTNBNKB4")).toBe(
      "XCPPTNBNKB4",
    );
  });

  it("reads the id from an /embed/ url", () => {
    expect(getVideoId("https://www.youtube.com/embed/XCPPTNBNKB4")).toBe(
      "XCPPTNBNKB4",
    );
  });

  it("reads the id from a /live/ url", () => {
    expect(getVideoId("https://www.youtube.com/live/XCPPTNBNKB4")).toBe(
      "XCPPTNBNKB4",
    );
  });

  it("reads the id from a /shorts/ url", () => {
    expect(getVideoId("https://www.youtube.com/shorts/XCPPTNBNKB4")).toBe(
      "XCPPTNBNKB4",
    );
  });

  it("returns null for a url with no recognizable video id", () => {
    expect(getVideoId("https://www.youtube.com/channel/UC123")).toBeNull();
  });
});
