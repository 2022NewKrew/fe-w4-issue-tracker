import { MilestoneService } from "@services";
import { Milestone } from "@types";
import { useQuery } from "react-query";
import { atom, selector, useSetRecoilState } from "recoil";

const milestoneListState = atom<Milestone[]>({
  key: "milestoneListState",
  default: [] as Milestone[],
});

export const useMilestoneList = () => {
  const setMilestoneList = useSetRecoilState(milestoneListState);
  return useQuery<Milestone[], Error>("milestones", MilestoneService.getAll, {
    staleTime: 5000,
    cacheTime: Infinity,
    suspense: true,
    onSuccess: (data) => {
      setMilestoneList(data);
    },
  });
};

export const milestoneListCountState = selector({
  key: "milestoneListCountState",
  get: ({ get }) => {
    const milestoneList = get(milestoneListState);
    return milestoneList.length;
  },
});
