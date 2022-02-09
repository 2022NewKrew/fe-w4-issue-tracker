import { IssueService } from "@services";
import { Issue, IssueForm, IssueStatus } from "@types";
import { arrayToggle } from "@utils/helper";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { FormMode } from "@stores/label";

export type IssueFilter = {
  status: IssueStatus;
  assignees: string | null;
  label: string[];
  milestone: string | null;
  author: string | null;
};

const issueFilterState = atom<IssueFilter>({
  key: "issueFilterState",
  default: {
    status: "open",
    assignees: null,
    label: [],
    milestone: null,
    author: null,
  },
});

const issueListState = atom<Issue[]>({
  key: "issueListState",
  default: [],
});

const filteredIssueListState = selector<Issue[]>({
  key: "filteredIssueListState",
  get: ({ get }) => {
    const { assignees, label, milestone, author } = get(issueFilterState);
    let issueList = get(issueListState);
    if (assignees || milestone || author || label.length) {
      return issueList.filter((issue) => {
        if (assignees && !issue.assignees.includes(assignees)) return false;
        if (milestone && issue.milestone?.id !== milestone) return false;
        if (author && issue.author !== author) return false;
        if (
          label.length &&
          !issue.labels.map(({ id }) => id).filter((id) => label.includes(id))
            .length
        )
          return false;
        return true;
      });
    }
    return issueList;
  },
});

const issueListCountState = selector<{
  [key in "openCount" | "closeCount"]: number;
}>({
  key: "issueListCountState",
  get: ({ get }) => {
    const filteredIssueList = get(filteredIssueListState);
    return {
      openCount: filteredIssueList.filter(({ status }) => status === "open")
        .length,
      closeCount: filteredIssueList.filter(({ status }) => status === "close")
        .length,
    };
  },
});

export const selectedIssueState = atom<string[]>({
  key: "selectedIssueState",
  default: [],
});

export const selectedIssueAllState = selector<boolean>({
  key: "selectedIssueAllState",
  get: ({ get }) => {
    const filter = get(issueFilterState);
    const total = get(filteredIssueListState).filter(
      ({ status }) => status === filter.status
    ).length;
    const selected = get(selectedIssueState).length;
    return total > 0 && total === selected;
  },
  set: ({ get, set }, newValue) => {
    const total = get(filteredIssueListState);
    set(selectedIssueState, newValue ? total.map(({ id }) => id) : []);
  },
});

export const useIssueStore = () => {
  const issueList = useRecoilValue(filteredIssueListState);
  const setIssueList = useSetRecoilState(issueListState);
  const [selectedIssue, setSelectedIssue] = useRecoilState(selectedIssueState);
  const issueListCount = useRecoilValue(issueListCountState);
  const [filter, setFilter] = useRecoilState(issueFilterState);
  const [selectAll, setSelectAll] = useRecoilState(selectedIssueAllState);
  useQuery<Issue[], Error>("issueList", IssueService.getAll, {
    onSuccess: (data) => {
      setIssueList(data);
    },
  });

  return {
    issueList,
    issueListCount,
    filter,
    setFilter,
    selectedIssue,
    setSelectedIssue,
    selectAll,
    setSelectAll,
  };
};

const issueFormState = atom<IssueForm>({
  key: "issueFormState",
  default: {
    title: "",
    comment: "",
    assignees: [],
    labels: [],
    milestone: null,
  },
});

const IssueFormModeState = atom<FormMode>({
  key: "IssueFormModeState",
  default: "close",
});

const IssueTitleModifyState = atom<boolean>({
  key: "IssueTitleModifyState",
  default: false,
});

export const useIssueFormStore = () => {
  const [issueForm, setIssueForm] = useRecoilState(issueFormState);
  const [issueFormMode, setIssueFormMode] = useRecoilState(IssueFormModeState);
  const resetIssueForm = useResetRecoilState(issueFormState);
  const [issueTitleModify, setIssueTitleModify] = useRecoilState(
    IssueTitleModifyState
  );
  return {
    issueForm,
    setIssueForm,
    resetIssueForm,
    setTitle: (e: any) =>
      setIssueForm((prev) => ({ ...prev, title: e.target.value })),
    setComment: (e: any) =>
      setIssueForm((prev) => ({ ...prev, comment: e.target.value })),
    setAssignees: (id: string) =>
      setIssueForm((prev) => ({
        ...prev,
        assignees: arrayToggle(prev.assignees, id),
      })),
    setLabels: (id: string) =>
      setIssueForm((prev) => ({
        ...prev,
        labels: arrayToggle(prev.labels, id),
      })),
    setMilestone: (milestone: string) =>
      setIssueForm((prev) => ({
        ...prev,
        milestone,
      })),
    issueFormMode,
    setIssueFormMode,
    issueTitleModify,
    setIssueTitleModify,
  };
};

export const useIssueMutation = () => {
  const resetIssueForm = useResetRecoilState(issueFormState);
  const issueForm = useRecoilValue(issueFormState);
  const setSelectedIssue = useSetRecoilState(selectedIssueState);
  const setIssueFormMode = useSetRecoilState(IssueFormModeState);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addIssue = useMutation(
    async () => IssueService.post("user1", issueForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        setIssueFormMode("close");
        resetIssueForm();
        navigate("/issue");
      },
    }
  );

  const modifyIssueStatus = useMutation(
    ({ issueId, status }: { issueId: string; status: IssueStatus }) =>
      IssueService.patchChangeStatus(issueId, status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        setSelectedIssue([]);
      },
    }
  );

  return {
    addIssue: () => addIssue.mutate(),
    modifyIssueStatus: (issueId: string, status: IssueStatus) =>
      modifyIssueStatus.mutate({ issueId, status }),
  };
};
