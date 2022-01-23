import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import theme from "@styles/theme";

const style = css`
  ${emotionReset}
  * {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    color: ${theme.greyscale.body};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
