import { selector } from "recoil";
import { getUserList } from "@/firebase.js";

export const userListState = selector({
  key: "userList",
  get: async () => await getUserList(),
});
