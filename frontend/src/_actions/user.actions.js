import "regenerator-runtime";

import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import axios from "axios";
import { instance } from "../_common/axios.js";

export { useUserActions };

function useUserActions() {
  const baseUrl = process.env.REACT_APP_API_URL;
  return {
    githubLogin,
    login,
  };

  async function githubLogin() {
    await instance
      .get("/api/auth/github")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  async function login(id, pwd) {
    const data = {
      id: id,
      pw: pwd,
    };
    await instance
      .post("/api/users/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
}
