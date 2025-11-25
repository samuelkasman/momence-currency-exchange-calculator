import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const CNB_DAILY_PATH =
  "/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/cnbProxy": {
        target: "https://www.cnb.cz",
        changeOrigin: true,
        rewrite: () => CNB_DAILY_PATH,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    passWithNoTests: true,
  },
});
