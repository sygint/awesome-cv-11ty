import { describe, test, expect } from "vitest";

import { stylizeName, join, is2Col } from "../../src/helpers";

describe("helpers", () => {
  test("styleName", () => {
    const input = "First M. Last";
    const expected = "First M. <span>Last</span>";

    expect(stylizeName(input)).toBe(expected);
  });

  test("join", () => {
    const input = ["Position 1", "Position 2", "Position 3"];
    const expected = "Position 1 | Position 2 | Position 3";

    expect(join(input, " | ")).toBe(expected);
  });

  test("is2Col", () => {
    expect(is2Col("2-col")).toBe(true);
    expect(is2Col(undefined)).toBe(false);
  })
});
