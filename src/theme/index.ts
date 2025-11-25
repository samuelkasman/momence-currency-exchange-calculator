import type { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

const spacing = (factor: number) => `${factor * 4}px`;

export const theme: DefaultTheme = {
  colors: {
    background: "#0f172a",
    surface: "#1f2937",
    border: "#334155",
    text: "#ffffff",
    muted: "#94a3b8",
    primary: "#6360E2",
    warning: "#f97316",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
  },
  shadow: "0 18px 45px rgba(2, 6, 23, 0.65)",
  spacing,
};

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: dark;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Inter", "SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  button, input, select {
    font: inherit;
  }
`;
