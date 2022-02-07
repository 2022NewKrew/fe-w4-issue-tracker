import ReactDOM from "react-dom";
import Router from "./Router";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
