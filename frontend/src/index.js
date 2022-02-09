import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";

import App from "./App";
import theme from "./styles/theme";
import "./styles/styles.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </CookiesProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
