import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";

import { Label } from "@types";
import { LabelService } from "@services";

const labelListState = atom<Label[]>({
  key: "labelListState",
  default: [] as Label[],
});

const labelListCountState = selector({
  key: "labelListCountState",
  get: ({ get }) => {
    const labelList = get(labelListState);
    return labelList.length;
  },
});

export const useLabelStore = () => {
  const [labelList, setLabelList] = useRecoilState(labelListState);
  const labelListCount = useRecoilValue(labelListCountState);
  useQuery<Label[], Error>("labels", LabelService.getAll, {
    onSuccess: (data) => {
      setLabelList(data);
    },
  });
  return {
    labelList,
    labelListCount,
  };
};
