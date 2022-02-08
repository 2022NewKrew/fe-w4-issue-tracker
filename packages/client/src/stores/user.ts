import { useQuery } from "react-query";
import { User } from "@types";
import { UserService } from "@services";
import { atom, useRecoilState } from "recoil";

const userListstate = atom<User[]>({
  key: "userListstate",
  default: [] as User[],
});

export const useUserStore = () => {
  const [userList, setUserList] = useRecoilState(userListstate);
  useQuery<User[], Error>("users", UserService.getAll, {
    onSuccess: (data) => {
      setUserList(data);
    },
  });

  return {
    userList,
  };
};
