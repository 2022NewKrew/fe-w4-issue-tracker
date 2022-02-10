import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useQuery } from "react-query";
import { issueFetcher } from "../utils/fetcher";
import { useMemo } from "react";

interface Issue {
  assignees: any[];
  milestone: { id: string };
  status: string;
}
export const issueStore = atom<any>({
  key: "issueStore",
  default: [],
});
export const issueFilterStore = atom<{
  status: string;
  assignee?: string;
  milstone?: string;
}>({
  key: "issueFilterStore",
  default: {
    status: "open",
    assignee: undefined,
    milstone: undefined,
  },
});
export const filterdIssueStore = selector({
  key: "filterdIssueStore",
  get: ({ get }) => {
    const list = get(issueStore);
    const filter = get(issueFilterStore);

    return (
      list &&
      list.filter((issue: Issue) => {
        if (
          filter.assignee &&
          issue.assignees.every((v: { id: string | undefined }) => v.id !== filter.assignee)
        )
          return false;

        if (filter.milstone && issue.milestone?.id !== filter.milstone) return false;

        return issue.status === filter.status;
      })
    );
  },
});

export const useIssueStore = () => {
  const filterdIssueList = useRecoilValue(filterdIssueStore);
  const [issueList, setIssueList] = useRecoilState(issueStore);
  const [issueFilter, setIssueFilter] = useRecoilState(issueFilterStore);

  useQuery("all-issues", issueFetcher, {
    onSuccess: data => setIssueList(data),
  });
  return {
    issueList,
    issueFilter,
    openIssueList: issueList && issueList.filter((item: any) => item.issueStatus === 0),
    filterdIssueList,
    setIssueList,
    setIssueFilter,
    openIssueCounts: useMemo(
      () =>
        issueList.reduce((acc: number, cur: any) => {
          return cur.status === "open" ? acc + 1 : acc;
        }, 0),
      [issueList],
    ),
    closeIssueCounts: useMemo(
      () =>
        issueList.reduce((acc: number, cur: any) => {
          return cur.status === "close" ? acc + 1 : acc;
        }, 0),
      [issueList],
    ),
  };
};
