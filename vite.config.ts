import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

import { CNB_DAILY_PATH, CNB_HOST } from "./config/cnb";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/cnbProxy": {
        target: CNB_HOST,
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
