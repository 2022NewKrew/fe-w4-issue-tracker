export const color = {
  LightGray: "#E5E5E5",
  LightBlue: "#007AFF",
  Lavender: "#EFF0F6",
  Black: "black",
  White: "white",
};

const cliendID = "965f9be513e52e58c140";
const callbackUrl = "http://localhost:3000/callback";

export const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${cliendID}&scope=repo:status read:repo_hook user:email&redirect_uri=${callbackUrl}`;
