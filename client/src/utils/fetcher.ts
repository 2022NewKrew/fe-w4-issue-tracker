import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3001";
export const fetcher = (url: string) =>
  axios.get(baseURL + url).then(res => res.data);
