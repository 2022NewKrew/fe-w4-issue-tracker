import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/styles.css";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
