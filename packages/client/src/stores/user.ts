import { useQuery } from "react-query";
import { User } from "@types";
import { UserService } from "@services";
import { atom, useSetRecoilState } from "recoil";

const userListstate = atom<User[]>({
  key: "userListstate",
  default: [] as User[],
});

export const useUserList = () => {
  const setUserList = useSetRecoilState(userListstate);
  return useQuery<User[], Error>("users", UserService.getAll, {
    staleTime: 5000,
    cacheTime: Infinity,
    suspense: true,
    onSuccess: (data) => {
      setUserList(data);
    },
  });
};
