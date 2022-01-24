import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/reset.css";

import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
