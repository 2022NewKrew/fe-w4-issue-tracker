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
    color: ${theme.greyscale.body};
  }
  input,
  textarea,
  button {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
