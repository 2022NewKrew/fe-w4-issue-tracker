import axios from "axios";

const baseURL = "http://localhost:3001";
const fetcher = (url: string) => {
  return axios.get(baseURL + url).then(res => res.data);
};
export default fetcher;
