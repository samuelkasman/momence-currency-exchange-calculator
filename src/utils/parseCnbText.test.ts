import { describe, expect, it } from "vitest";

import { parseCnbText, type ExchangeRate } from "./parseCnbText";

const sample = `15 Nov 2025 #223
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15,123
EMU|euro|1|EUR|24,58
Japan|yen|100|JPY|16,789`;

describe("parseCnbText", () => {
  it("converts CNB text into structured exchange rates", () => {
    const result = parseCnbText(sample);

    const expected: ExchangeRate[] = [
      {
        country: "Australia",
        currency: "dollar",
        amount: 1,
        code: "AUD",
        rate: 15.123,
      },
      { country: "EMU", currency: "euro", amount: 1, code: "EUR", rate: 24.58 },
      {
        country: "Japan",
        currency: "yen",
        amount: 100,
        code: "JPY",
        rate: 16.789,
      },
    ];

    expect(result).toEqual(expected);
  });

  it("handles blank separators and ignores malformed rows", () => {
    const malformed = `16 Nov 2025 #224
Country|Currency|Amount|Code|Rate

Bad|Row|Missing
  Canada | dollar | 1 | CAD | 17,890
`;

    const result = parseCnbText(malformed);

    expect(result).toEqual([
      {
        country: "Canada",
        currency: "dollar",
        amount: 1,
        code: "CAD",
        rate: 17.89,
      },
    ]);
  });

  it("returns empty array for empty input", () => {
    expect(parseCnbText("   ")).toEqual([]);
  });
});
