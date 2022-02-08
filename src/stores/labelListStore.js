import { atom, selector } from "recoil";
import { getLabelList } from "@/firebase.js";

export const forceLabelListUpdate = atom({
  key: "labelListUpdater",
  default: 0,
});

export const labelListState = selector({
  key: "labelList",
  get: async ({ get }) => {
    get(forceLabelListUpdate);
    return await getLabelList();
  },
});

export const labelListCountState = selector({
  key: "labelListCount",
  get: ({ get }) => get(labelListState).length,
});
