import { IssueService } from "@services";
import { Issue, IssueStatus } from "@types";
import { atom, selector } from "recoil";

export const currentTableIssueStatusState = atom<IssueStatus>({
  key: "currentTableIssueStatusState",
  default: "open",
});

export type TableFilter = "assignees" | "label" | "milestone" | "author";

type IssueTableFilter = {
  [key in TableFilter]: string | null;
};

export const issueTableFilterState = atom<IssueTableFilter>({
  key: "issueTableFilterState",
  default: {
    assignees: null,
    label: null,
    milestone: null,
    author: null,
  },
});

export const filteredIssueListState = selector<Issue[]>({
  key: "filteredIssueListState",
  get: async ({ get }) => {
    const filter = get(issueTableFilterState);

    const issueStatus = get(currentTableIssueStatusState);
    let issueList = await IssueService.get(issueStatus);
    if (filter.assignees) {
      issueList = issueList.filter(({ assignees }) =>
        assignees.includes(filter.assignees as string)
      );
    }
    if (filter.label) {
      issueList = issueList.filter(
        ({ labels }) => labels.filter(({ id }) => id === filter.label).length
      );
    }
    if (filter.author) {
      issueList = issueList.filter(({ author }) => author == filter.author);
    }
    if (filter.milestone) {
      issueList = issueList.filter(
        ({ milestone }) => milestone == filter.milestone
      );
    }
    return issueList;
  },
});
