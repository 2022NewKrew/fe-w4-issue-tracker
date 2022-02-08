import { IssueService } from "@services";
import { Issue, IssueStatus } from "@types";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

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
    const issueList = get(issueListState);
    if (assignees || milestone || author || label.length) {
      return issueList.filter(
        (issue) =>
          (assignees && issue.assignees.includes(assignees)) ||
          (milestone && issue.milestone?.id === milestone) ||
          (author && issue.author === author) ||
          (label.length &&
            issue.labels.map(({ id }) => id).filter((id) => label.includes(id))
              .length)
      );
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
  const selectedIssue = useRecoilValue(selectedIssueState);
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
    selectAll,
    setSelectAll,
  };
};

export const useModifyIssueStatusData = () => {
  const queryClient = useQueryClient();
  const setSelectedIssue = useSetRecoilState(selectedIssueState);
  return useMutation(
    ({ issueId, status }: { issueId: string; status: IssueStatus }) =>
      IssueService.patchChangeStatus(issueId, status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("issueList");
        setSelectedIssue([]);
      },
    }
  );
};
