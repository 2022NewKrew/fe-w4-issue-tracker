import { selector } from "recoil";
import { getLabelList } from "@/firebase.js";

export const labelListState = selector({
  key: "labelList",
  get: async () => await getLabelList(),
});

export const labelListCountState = selector({
  key: "labelListCount",
  get: ({ get }) => get(labelListState).length,
});
