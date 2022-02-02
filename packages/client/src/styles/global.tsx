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
    color: ${theme.Greyscale.body};
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
    ${theme.FontSize.small}
    color: ${theme.Greyscale.placeholer};
    padding-left: 3px;
  }
  body {
    background: ${theme.Greyscale.background};
    width: 1440px;
    margin: 0 auto;
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
  :root {
    --primary-light: ${theme.Colors.primary.light};
    --primary-default: ${theme.Colors.primary.default};
    --primary-dark: ${theme.Colors.primary.dark};
    --secondary-light: ${theme.Colors.secondary.light};
    --secondary-default: ${theme.Colors.secondary.default};
    --secondary-dark: ${theme.Colors.secondary.dark};
    --success-light: ${theme.Colors.success.light};
    --success-default: ${theme.Colors.success.default};
    --success-dark: ${theme.Colors.success.dark};
    --error-light: ${theme.Colors.error.light};
    --error-default: ${theme.Colors.error.default};
    --error-dark: ${theme.Colors.error.dark};
    --titleActive: ${theme.Greyscale.titleActive};
    --body: ${theme.Greyscale.body};
    --label: ${theme.Greyscale.label};
    --placeholer: ${theme.Greyscale.placeholer};
    --line: ${theme.Greyscale.line};
    --inputBackground: ${theme.Greyscale.inputBackground};
    --background: ${theme.Greyscale.background};
    --offWhite: ${theme.Greyscale.offWhite};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
