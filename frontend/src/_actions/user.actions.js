import "regenerator-runtime";

import { useRecoilState, useSetRecoilState } from "recoil";
import { userState, authState } from "../_state";
import { useFetchWrapper } from "../_common/fetchWrapper.js";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export { useUserActions };

function useUserActions() {
  const setUser = useSetRecoilState(userState);
  const [auth, setAuth] = useRecoilState(authState);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const fetchWrapper = useFetchWrapper();

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
    fetchWrapper
      .post("/api/users/login", data)
      .then((res) => {
        const user = res.user.name;
        setCookie("user", JSON.stringify(user));

        const accessToken = res.accessToken;
        localStorage.setItem("token", JSON.stringify(res));
        setAuth(res);

        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    setUser(null);
    removeCookie("user");
  }
}
