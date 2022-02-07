import "regenerator-runtime";

import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { instance } from "../_common/axios.js";
import { userState } from "../_state/users";

import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export { useUserActions };

function useUserActions() {
  const setUser = useSetRecoilState(userState);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  return {
    githubLogin,
    login,
    logout,
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
      .then((res) => {
        const user = res.data.user.name;
        setCookie("user", JSON.stringify(user));

        const accessToken = res.data.accessToken;
        instance.defaults.headers.common = {
          Authorization: `Bearer ${accessToken}`,
        };

        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    setUser(null);
    removeCookie("user");
  }
}
