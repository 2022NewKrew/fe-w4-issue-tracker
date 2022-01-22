import { Global, css, Theme } from "@emotion/react";

const style = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    color: ${theme.greyscale.body};
  }
  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
