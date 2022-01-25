export const Color = {
  TitleActive: "#14142B",
  Body: "#4E4B66",
  Label: "#6E7191",
  Placeholder: "#A0A3BD",
  Line: "#D9DBE9",
  InputBackground: "#EFF0F6",
  Background: "#F7F7FC",
  offWhite: "#FEFEFE",
  Blue: "#007AFF",
  LightBlue: "#C7EBFF",
  DarkBlue: "#004DE3",
  Green: "#34C759",
  LightGreen: "#DDFFE6",
  DarkGreen: "#00A028",
  Purple: "#0025E7",
  LightPurple: "#CCD4FF",
  DarkPurple: "#020070",
  Red: "#FF3B30",
  LightRed: "#FFD1CF",
  DarkRed: "#C60B00",
  White: "white",
  None: "transparent",
};

const clientID = "965f9be513e52e58c140";
const callbackUrl = "http://localhost:3000/callback";

export const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo:status read:repo_hook user:email&redirect_uri=${callbackUrl}`;
