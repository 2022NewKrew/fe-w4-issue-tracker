import { atom, selector, useSetRecoilState } from "recoil";
import { useQuery } from "react-query";

import { Label } from "@types";
import { LabelService } from "@services";

const labelListState = atom<Label[]>({
  key: "labelListState",
  default: [] as Label[],
});

export const useLabelList = () => {
  const setLabelList = useSetRecoilState(labelListState);
  return useQuery<Label[], Error>("labels", LabelService.getAll, {
    staleTime: 5000,
    cacheTime: Infinity,
    suspense: true,
    onSuccess: (data) => {
      setLabelList(data);
    },
  });
};

export const labelListCountState = selector({
  key: "labelListCountState",
  get: ({ get }) => {
    const labelList = get(labelListState);
    return labelList.length;
  },
});
