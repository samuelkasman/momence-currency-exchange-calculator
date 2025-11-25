import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`;
