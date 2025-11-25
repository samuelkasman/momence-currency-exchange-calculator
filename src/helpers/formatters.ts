const LOCALE = "cs-CZ";

export const formatAmount = (value: number) =>
  new Intl.NumberFormat(LOCALE).format(value);

export const formatRate = (value: number) =>
  new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);

export const formatConvertedAmount = (value: number) =>
  new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const thousandsSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;

export const formatCzkInputValue = (value: string) => {
  if (!value) {
    return "";
  }

  const hasDecimalSeparator = value.includes(".");
  const hasTrailingSeparator = value.endsWith(".");
  const [rawIntegerPart, rawDecimalPart = ""] = value.split(".");
  const integerPartToFormat =
    rawIntegerPart || (hasDecimalSeparator ? "0" : "");

  const formattedIntegerPart = integerPartToFormat
    ? integerPartToFormat.replace(thousandsSeparatorRegex, " ")
    : "";

  if (!hasDecimalSeparator) {
    return formattedIntegerPart;
  }

  const decimalPart = hasTrailingSeparator ? "" : rawDecimalPart;

  return `${formattedIntegerPart || "0"},${decimalPart}`;
};

export const normalizeAmountInputValue = (value: string) =>
  value.replace(/\s/g, "").replace(/,/g, ".");
