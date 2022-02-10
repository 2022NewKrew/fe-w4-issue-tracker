import { atom, useRecoilState } from "recoil";

export const authStore = atom<any>({
  key: "authStore",
  default: undefined,
});

export const useAuthStore = () => {
  const [auth, setAuth] = useRecoilState(authStore);

  return {
    auth,
    signin: ({ user, ...auth }: any) => {
      localStorage.setItem("authToken", auth.accessToken);
      setAuth(user);
    },
    signout: () => {
      localStorage.removeItem("authToken");
      setAuth(undefined);
    },
  };
};
