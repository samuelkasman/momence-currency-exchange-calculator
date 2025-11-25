import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import { Home } from "./screens/Home";
import { GlobalStyle, theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
