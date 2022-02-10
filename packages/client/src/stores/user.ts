import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { User, UserLogin } from "@types";
import { UserService } from "@services";
import { atom, useRecoilState, useSetRecoilState } from "recoil";

const userListState = atom<User[]>({
  key: "userListState",
  default: [] as User[],
});

export const useUserStore = () => {
  const [userList, setUserList] = useRecoilState(userListState);
  const [me, setMe] = useRecoilState(userState);
  useQuery<User[], Error>("users", UserService.getAll, {
    onSuccess: (data) => {
      setUserList(data);
    },
  });
  const userId = sessionStorage.getItem("userId");
  if (userId) setMe(userList.find(({ id }) => id === userId) as User);
  return {
    userList,
    me,
  };
};
export const userState = atom<User | null>({
  key: "userState",
  default: null,
});

const loginFailMessageState = atom<string>({
  key: "loginFailMessageState",
  default: "",
});

export const useUserMutation = () => {
  const setUserState = useSetRecoilState(userState);

  const [loginFailMessage, setLoginFailMessage] = useRecoilState(
    loginFailMessageState
  );

  const nav = useNavigate();

  const IDLogin = useMutation(
    async ({ id, pw }: UserLogin) =>
      UserService.login({
        id,
        pw,
      }),
    {
      onSuccess: (user) => {
        setUserState(user);
        sessionStorage.setItem("userId", user.id);
        nav("issue");
      },
      onError: (e: Error) => {
        setLoginFailMessage(e.message);
      },
    }
  );

  return {
    IDLogin: ({ id, pw }: UserLogin) => IDLogin.mutate({ id, pw }),
    loginFailMessage,
    setLoginFailMessage,
  };
};
