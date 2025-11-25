export interface ExchangeRate {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
}

const NEW_LINE = /\r?\n/;
const HEADER_ROW = "country|currency|amount|code|rate";

export const parseCnbText = (rawString: string): ExchangeRate[] => {
  if (!rawString.trim()) {
    return [];
  }

  const lines = rawString
    .split(NEW_LINE)
    .map((line: string) => line.trim())
    .filter((line: string) => line.length > 0);

  if (lines.length <= 1) {
    return [];
  }

  const [, ...rowsWithHeader] = lines;
  const rows =
    rowsWithHeader[0]?.toLowerCase() === HEADER_ROW
      ? rowsWithHeader.slice(1)
      : rowsWithHeader;

  return rows.reduce<ExchangeRate[]>((acc, row: string) => {
    const parts = row.split("|");

    if (parts.length < 5) {
      return acc;
    }

    const [country, currency, amountStr, code, rateStr] = parts.map(
      (part: string) => part.trim(),
    );

    const amount = Number.parseInt(amountStr, 10);
    const rate = Number.parseFloat(rateStr.replace(",", "."));

    if (Number.isNaN(amount) || Number.isNaN(rate)) {
      return acc;
    }

    acc.push({
      country,
      currency,
      amount,
      code,
      rate,
    });

    return acc;
  }, []);
};
