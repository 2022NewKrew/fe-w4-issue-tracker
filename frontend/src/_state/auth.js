import { atom } from "recoil";

const authState = atom({
  key: "authState",
  // get initial state from local storage to enable user to stay logged in
  default: JSON.parse(localStorage.getItem("token")),
});

export { authState };
