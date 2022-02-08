export const BUTTON_TYPE = {
  LARGE: "large",
  MEDIUM_STANDARD: "mediumStandard",
  SMALL_SECONDARY: "smallSecondary",
  SMALL_STANDARD: "smallStandard",
  TEXT_MEDIUM: "textMedium",
  TEXT_SMALL: "textSmall",
};

export const TEXT_TYPE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
  XSMALL: "xsmall",
  ISSUE: "issue",
};

export const TEXT_INPUT_TYPE = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
  COLOR_CODE: "colorCode",
};

export const INPUT_TYPE = {
  ID: "아이디",
  PASSWORD: "비밀번호",
  FILTERBARS: "FilterBar",
};

export const INPUT_CLASS_TYPE = {
  INITIAL: "initial",
  TYPING: "typing",
  ACTIVE: "active",
  FILLED: "filled",
  SUCCESS: "success",
  ERROR: "error",
};

export interface IStyle {
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
  borderColor?: string;
  color?: string;
  fontSize?: string;
  iconColor?: string;
  childCSS?: any;
  padding?: string;
}
const GITHUB_AUTH_URL = "https://github.com/login/oauth/authorize";
const CLIENT_ID = "0e4c6359e99345114044";
const REDIRECT_URL = "http://localhost:3000/callback";
export const GITHUB_LOGINURL = `${GITHUB_AUTH_URL}?client_id=${CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=${REDIRECT_URL}`;
