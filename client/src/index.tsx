import React from "react";
import theme from "@/styles/Theme";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);
