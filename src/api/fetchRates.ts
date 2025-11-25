import {
  CNB_DAILY_URL,
  CNB_PROXY_URL,
  MOCK_CNB_DAILY_URL,
} from "../config/exchangeRates";
import { type ExchangeRate, parseCnbText } from "../utils/parseCnbText";

export const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  const preferMock =
    import.meta.env.MODE !== "test" &&
    import.meta.env.DEV &&
    import.meta.env.VITE_USE_CNB_MOCK !== "false";

  const useProxy = import.meta.env.VITE_USE_CNB_PROXY !== "false";
  const endpoints = preferMock
    ? [MOCK_CNB_DAILY_URL]
    : [...(useProxy ? [CNB_PROXY_URL] : []), CNB_DAILY_URL];

  let lastError: unknown;

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Accept: "text/plain",
        },
      });

      if (!response.ok) {
        throw new Error(`CNB request failed with status ${response.status}`);
      }

      const responseText = await response.text();
      return parseCnbText(responseText);
    } catch (error) {
      lastError = error;

      if (import.meta.env.DEV) {
        console.warn(`[fetchExchangeRates] Failed to fetch ${endpoint}`, error);
      }
    }
  }

  if (lastError instanceof Error) {
    throw lastError;
  }

  throw new Error("Failed to fetch CNB exchange rates");
};
