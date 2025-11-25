import { CNB_DAILY_URL, MOCK_CNB_DAILY_URL } from "../config/exchangeRates";
import { type ExchangeRate, parseCnbText } from "../utils/parseCnbText";

export const fetchExchangeRates = async (): Promise<ExchangeRate[]> => {
  const preferMock =
    import.meta.env.MODE !== "test" &&
    import.meta.env.DEV &&
    import.meta.env.VITE_USE_CNB_MOCK !== "false";

  const endpoint = preferMock ? MOCK_CNB_DAILY_URL : CNB_DAILY_URL;

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
};
