import ReactDOM from "react-dom";
import App from "./App";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
