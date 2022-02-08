import { atom, selector } from "recoil";
import { getMilestoneList } from "@/firebase.js";

export const forceMilestoneListUpdate = atom({
  key: "milestoneListUpdater",
  default: 0,
});

export const milestoneListState = selector({
  key: "milestoneList",
  get: async ({ get }) => {
    get(forceMilestoneListUpdate);
    return await getMilestoneList();
  },
});

export const milestoneListCountState = selector({
  key: "milestoneListCount",
  get: ({ get }) => get(milestoneListState).length,
});
