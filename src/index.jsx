import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    src: url(./assets/fonts/NotoSansKR-Bold.woff) format("woff");
    font-weight: 400;
  }

  @font-face {
    font-family: "NotoSans";
    src: url(./assets/fonts/NotoSansKR-Regular.woff) format("woff");
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    font-family: "NotoSans";
  }

  ul {
    list-style: none;
  }
`;
