import axios from "axios";
// import cookies from "js-cookie";

export const instance = axios.create({
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

instance.defaults.withCredentials = true;
