const clientID = "965f9be513e52e58c140";
const callbackUrl = "http://localhost:3000/callback";

export const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=repo:status read:repo_hook user:email&redirect_uri=${callbackUrl}`;
