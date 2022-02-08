import { IssueService } from "@services";
import { Issue, IssueStatus } from "@types";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import {
  atom,
  atomFamily,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export const issueListState = atomFamily<Issue[], string>({
  key: "issueListState",
  default: [] as Issue[],
});

export const issueStatusFilterState = atom<IssueStatus>({
  key: "issueStatusFilterState",
  default: "open",
});

export const selectedIssueState = atom<string[]>({
  key: "selectedIssueState",
  default: [],
});

export const useIssueList = () => {
  const issueStatus = useRecoilValue(issueStatusFilterState);
  const setIssueList = useSetRecoilState(issueListState(issueStatus));
  return useQuery<Issue[], Error>(
    ["issue", issueStatus],
    () => IssueService.getAll(issueStatus),
    {
      staleTime: 5000,
      cacheTime: Infinity,
      suspense: true,
      onSuccess: (data) => {
        setIssueList(data);
      },
    }
  );
};

export const selectedAllIssueState = selector<boolean>({
  key: "selectedAllIssueState",
  get: ({ get }) => {
    const issueStatus = get(issueStatusFilterState);
    const total = get(issueListState(issueStatus)).length;
    const current = get(selectedIssueState).length;
    return total === current;
  },
  set: ({ get, set }, newValue) => {
    const issueStatus = get(issueStatusFilterState);
    const total = get(issueListState(issueStatus));
    set(selectedIssueState, newValue ? total.map(({ id }) => id) : []);
  },
});

export type IssueFilterKey = "assignees" | "label" | "milestone" | "author";

export type IssueFilter = {
  [key in IssueFilterKey]: string | null;
};

export const issueFilterState = atom<IssueFilter>({
  key: "issueFilterState",
  default: {
    assignees: null,
    label: null,
    milestone: null,
    author: null,
  },
});

export const useIssueCountData = () =>
  useQueries([
    { queryKey: ["issue", "open"], queryFn: () => IssueService.getAll("open") },
    {
      queryKey: ["issue", "close"],
      queryFn: () => IssueService.getAll("close"),
    },
  ]);

export const useModifyIssueStatusData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ issueId, status }: { issueId: string; status: "open" | "close" }) =>
      IssueService.patchChangeStatus(issueId, status),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["issue", "open"]);
        queryClient.invalidateQueries(["issue", "close"]);
        queryClient.setQueryData(["issue", "open"], data);
      },
    }
  );
};
