import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./style/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
