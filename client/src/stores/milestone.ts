import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { milestoneFetcher } from "../utils/fetcher";

export const milestoneStore = atom<any>({
  key: "milestoneStore",
  default: [],
});

export const useMilestoneStore = () => {
  const [milestoneList, setMilestoneList] = useRecoilState(milestoneStore);

  useQuery("read_all_milestones", milestoneFetcher, {
    onSuccess: data => setMilestoneList(data),
  });

  return { milestoneList, setMilestoneList };
};
