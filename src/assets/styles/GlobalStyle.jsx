import { createGlobalStyle } from 'styled-components';
import { backgroundGS } from '@/assets/styles/Palette';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSans";
    src: url('../fonts/NotoSansKR-Regular.otf') format('otf');
    font-weight: 400;
  }

  @font-face {
    font-family: "NotoSans";
    src: url('../fonts/NotoSansKR-Bold.otf') format('otf');
    font-weight: 700;
  }

  body {
    background-color: ${backgroundGS};
  }

  * {
    box-sizing: border-box;
    font-family: "NotoSans";
  }

  button {
    outline: none;
    border: none;
  }

  ul {
    list-style: none;
  }
`;
