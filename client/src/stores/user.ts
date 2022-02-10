import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { userFetcher } from "../utils/fetcher";

export const userStore = atom<any>({
  key: "userStore",
  default: [],
});

export const useUserStore = () => {
  const [userList, setUserList] = useRecoilState(userStore);

  useQuery("read_all_users", userFetcher, {
    onSuccess: data => setUserList(data),
  });

  return { userList, setUserList };
};
