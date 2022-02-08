import { atom } from "recoil";

export const filterState = atom({
  key: "filter",
  default: {
    isOpened: true,
    writer: "*",
    label: "*",
    milestone: "*",
    assignee: "*",
  },
});
