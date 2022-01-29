import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "@styles/theme";

const style = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    line-height: 100%;
    color: ${theme.greyscale.body};
    /* letter-spacing: -0.03rem; */
  }
  input,
  textarea,
  button {
    border: none;
    outline: none;
    padding: 0;
  }
  button {
    cursor: pointer;
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  input::placeholder {
    ${theme.text.small}
    color: ${theme.greyscale.placeholer};
    padding-left: 3px;
  }
  body {
    background: #f7f7fc;
    width: 1440px;
  }
  a {
    text-decoration: none;
  }
  svg {
    position: absolute;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
