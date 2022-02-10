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
import { userState, useUserStore } from "./user";

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

  const resetFilter = useResetRecoilState(issueFilterState);

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
    resetFilter,
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

export const issueFormModeState = atom<FormMode>({
  key: "issueFormModeState",
  default: "close",
});

const issueTitleModifyState = atom<boolean>({
  key: "issueTitleModifyState",
  default: false,
});

export const useIssueFormStore = () => {
  const [issueForm, setIssueForm] = useRecoilState(issueFormState);
  const [issueFormMode, setIssueFormMode] = useRecoilState(issueFormModeState);
  const resetIssueForm = useResetRecoilState(issueFormState);
  const [issueTitleModify, setIssueTitleModify] = useRecoilState(
    issueTitleModifyState
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
  const [issueFormMode, setIssueFormMode] = useRecoilState(issueFormModeState);
  const me = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const nav = useNavigate();

  const addIssue = useMutation(
    async () => IssueService.post(me!.id, issueForm),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        queryClient.invalidateQueries("commentList");
        setIssueFormMode("close");
        resetIssueForm();
        nav("/issue");
      },
    }
  );

  const modifyIssueStatus = useMutation(
    ({ issueId, status }: { issueId: string; status: IssueStatus }) =>
      IssueService.patchChangeStatus({ issueId, status, author: me!.id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        queryClient.invalidateQueries("commentList");
        setSelectedIssue([]);
      },
    }
  );

  const modifyIssueTitle = useMutation(
    async () =>
      IssueService.patchChangeTitle({
        issueId: issueFormMode,
        title: issueForm.title,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
      },
    }
  );

  const modifyIssue = useMutation(
    async () =>
      IssueService.patch({
        issueId: issueFormMode,
        issueForm,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
      },
    }
  );

  const removeIssue = useMutation(
    async () => IssueService.delete(issueFormMode),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        nav("/issue");
      },
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
    addIssue: () => checkPermission(() => addIssue.mutate()),
    modifyIssueStatus: ({
      issueId,
      status,
    }: {
      issueId: string;
      status: IssueStatus;
    }) => checkPermission(() => modifyIssueStatus.mutate({ issueId, status })),
    modifyIssueTitle: () => checkPermission(modifyIssueTitle.mutate),
    modifyIssue: () => checkPermission(modifyIssue.mutate),
    removeIssue: () => checkPermission(removeIssue.mutate),
  };
};

export const checkPermission = (fn: Function) => {
  const { me } = useUserStore();
  const nav = useNavigate();
  if (!me) {
    nav("/login");
  } else {
    fn();
  }
};
