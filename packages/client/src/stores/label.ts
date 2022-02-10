import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
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
import { userState } from "./user";

const labelListState = atom<Label[]>({
  key: "labelListState",
  default: [] as Label[],
});

const labelListCountState = selector<number>({
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

const labelFormState = atom<LabelForm>({
  key: "labelFormState",
  default: {
    name: "",
    description: "",
    backgroundColor: "#EFF0F6",
    textColor: "dark",
  },
});

export type FormMode = "add" | "close" | string;

const labelFormModeState = atom<FormMode>({
  key: "labelFormModeState",
  default: "close",
});

export const useLabelFormStore = () => {
  const [labelForm, setLabelForm] = useRecoilState(labelFormState);
  const resetLabelForm = useResetRecoilState(labelFormState);
  const [labelFormMode, setLabelFormMode] = useRecoilState(labelFormModeState);
  return {
    labelForm,
    setLabelForm,
    resetLabelForm,
    setName: (e: any) =>
      setLabelForm((prev) => ({ ...prev, name: e.target.value })),
    setDescription: (e: any) =>
      setLabelForm((prev) => ({ ...prev, description: e.target.value })),
    setBackgroundColor: (e: any) =>
      setLabelForm((prev) => ({ ...prev, backgroundColor: e.target.value })),
    setTextColor: (textColor: "light" | "dark") =>
      setLabelForm((prev) => ({ ...prev, textColor })),
    labelFormMode,
    setLabelFormMode,
  };
};

export const useLabelMutation = () => {
  const queryClient = useQueryClient();
  const resetLabelForm = useResetRecoilState(labelFormState);
  const labelForm = useRecoilValue(labelFormState);
  const [labelFormMode, setLabelFormMode] = useRecoilState(labelFormModeState);
  const nav = useNavigate();
  const me = useRecoilValue(userState);

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries("labelList");
    resetLabelForm();
    setLabelFormMode("close");
  }, []);

  const addLabel = useMutation(async () => LabelService.post(labelForm), {
    onSuccess,
  });

  const modifyLabel = useMutation(
    async () => LabelService.patch(labelFormMode, labelForm),
    {
      onSuccess,
    }
  );

  const removeLabel = useMutation(
    async (id: string) => LabelService.delete(id),
    {
      onSuccess,
    }
  );

  const checkPermission = (fn: Function) => {
    if (!me) {
      nav("/login");
    } else {
      fn();
    }
  };

  return {
    addLabel: () => checkPermission(addLabel.mutate),
    modifyLabel: () => checkPermission(modifyLabel.mutate),
    removeLabel: (id: string) => checkPermission(() => removeLabel.mutate(id)),
  };
};
