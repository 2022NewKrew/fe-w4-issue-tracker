import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Label, LabelForm } from "@types";
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
  useQuery<Label[], Error>("labelList", LabelService.getAll, {
    onSuccess: (data) => {
      setLabelList(data);
    },
  });
  return { labelList, labelListCount };
};

const LabelFormState = atom<LabelForm>({
  key: "LabelFormState",
  default: {
    name: "",
    description: "",
    backgroundColor: "#EFF0F6",
    textColor: "dark",
  },
});

export const useLabelFormStore = () => {
  const [labelForm, setLabelForm] = useRecoilState(LabelFormState);

  return {
    labelForm,
    setName: (e: any) =>
      setLabelForm((prev) => ({ ...prev, name: e.target.value })),
    setDescription: (e: any) =>
      setLabelForm((prev) => ({ ...prev, description: e.target.value })),
    setBackgroundColor: (e: any) =>
      setLabelForm((prev) => ({ ...prev, backgroundColor: e.target.value })),
    setTextColor: (textColor: "light" | "dark") =>
      setLabelForm((prev) => ({ ...prev, textColor })),
  };
};

export const useLabelMutation = () => {
  const queryClient = useQueryClient();
  const resetIssueForm = useResetRecoilState(LabelFormState);
  const labelForm = useRecoilValue(LabelFormState);

  const addLabel = useMutation(async () => LabelService.post(labelForm), {
    onSuccess: () => {
      queryClient.invalidateQueries("labelList");
      resetIssueForm();
    },
  });

  return {
    addLabel: () => addLabel.mutate(),
  };
};
