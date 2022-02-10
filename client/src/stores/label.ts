import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { labelFetcher } from "../utils/fetcher";

export const labelStore = atom<any>({
  key: "labelStore",
  default: [],
});

export const useLabelStore = () => {
  const [labelList, setLabelList] = useRecoilState(labelStore);

  useQuery("read_all_labels", labelFetcher, {
    onSuccess: data => setLabelList(data),
  });

  return { labelList, setLabelList };
};
