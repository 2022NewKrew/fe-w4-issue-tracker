import { atom, selector } from "recoil";

const issuesState = atom({
  key: "issues",
  default: null,
});

const activeIssueTabState = atom({
  key: "activeIssueTab",
  default: "open",
});

const openIssuesState = selector({
  key: "openIssues",
  get: ({ get }) => {
    const issues = get(issuesState);
    return issues && issues.filter((issue) => issue.status === "open");
  },
});

const closedIssuesState = selector({
  key: "closedIssues",
  get: ({ get }) => {
    const issues = get(issuesState);
    return issues && issues.filter((issue) => issue.status === "close");
  },
});

export { issuesState, activeIssueTabState, openIssuesState, closedIssuesState };
