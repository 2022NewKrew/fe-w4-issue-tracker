import { MilestoneService } from "@services";
import { Milestone } from "@types";
import { useQuery } from "react-query";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const milestoneListState = atom<Milestone[]>({
  key: "milestoneListState",
  default: [] as Milestone[],
});

const milestoneListCountState = selector({
  key: "milestoneListCountState",
  get: ({ get }) => {
    const milestoneList = get(milestoneListState);
    return milestoneList.length;
  },
});

export const useMilestoneStore = () => {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneListState);
  const milestoneListCount = useRecoilValue(milestoneListCountState);
  useQuery<Milestone[], Error>("milestones", MilestoneService.getAll, {
    onSuccess: (data) => {
      setMilestoneList(data);
    },
  });
  return {
    milestoneList,
    milestoneListCount,
  };
};
