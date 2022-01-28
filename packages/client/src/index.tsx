import ReactDOM from "react-dom";
import Router from "./Router";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById("root")
);
