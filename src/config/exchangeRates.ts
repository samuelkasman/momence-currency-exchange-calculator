export { CNB_DAILY_PATH, CNB_DAILY_URL, CNB_HOST } from "../../config/cnb";

export const CNB_PROXY_URL =
  import.meta.env.VITE_CNB_PROXY_URL ?? "/api/cnbProxy";

export const MOCK_CNB_DAILY_URL = "/mock/cnb-daily.txt";
