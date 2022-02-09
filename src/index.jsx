import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./style/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
