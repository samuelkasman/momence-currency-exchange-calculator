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
