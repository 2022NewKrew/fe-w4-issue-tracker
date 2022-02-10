import api from "./api";

export const fetcher = (url: string) => {
  return api.get(url).then(res => res.data);
};
export const issueFetcher = () => {
  return api.get("issues");
};
export const userLoginFetcher = ({ id, pw }: { id: string; pw: string }) => {
  return api.post("users/login", { id, pw });
};
export const labelFetcher = () => {
  return api.get("labels");
};
export const milestoneFetcher = () => {
  return api.get("milestones");
};
export const userFetcher = () => {
  return api.get("");
};
