import { selector } from "recoil";
import { getMilestoneList } from "@/firebase.js";

export const milestoneListState = selector({
  key: "milestoneList",
  get: async () => await getMilestoneList(),
});

export const milestoneListCountState = selector({
  key: "milestoneListCount",
  get: ({ get }) => get(milestoneListState).length,
});
