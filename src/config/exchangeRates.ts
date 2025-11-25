const CNB_DAILY_PATH =
  "/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const CNB_DAILY_URL = `https://www.cnb.cz${CNB_DAILY_PATH}`;

export const CNB_PROXY_URL =
  import.meta.env.VITE_CNB_PROXY_URL ?? "/api/cnbProxy";

export const MOCK_CNB_DAILY_URL = "/mock/cnb-daily.txt";
