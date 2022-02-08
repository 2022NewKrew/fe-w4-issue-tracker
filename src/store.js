import { atom, selector } from "recoil";
import {
  getIssueList,
  getLabelList,
  getMilestoneList,
  getUserList,
} from "@/firebase.js";

export const filterState = atom({
  key: "filter",
  default: {
    isOpened: "true",
    writer: "*",
    label: "*",
    milestone: "*",
    assignee: "*",
  },
});

const filterIssueList = (issueList, filter) =>
  issueList.filter((issue) => {
    const issueEntries = Object.entries(issue);
    return issueEntries.every(([key, issueValue]) => {
      const filterValue = filter[key];
      if (filterValue === undefined || filterValue === "*") {
        return true;
      }
      if (Array.isArray(issueValue)) {
        // for "label", "assignee" prop
        return issueValue.some(
          (value) => value === filterValue || value.name === filterValue
        );
      } else if (issueValue instanceof Object) {
        // for "writer" prop
        return issueValue.name === filterValue;
      } else {
        // for "isOpened", "milestone" prop
        return issueValue === filterValue;
      }
    });
  });

export const issueListState = selector({
  key: "issueList",
  get: async () => await getIssueList(),
});

export const filteredIssueListState = selector({
  key: "filteredIssueList",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = get(filterState);
    return filterIssueList(issueList, filter);
  },
});

export const openedIssueListCountState = selector({
  key: "openedIssueListCount",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = { isOpened: "true" };
    return filterIssueList(issueList, filter).length;
  },
});

export const closedIssueListCountState = selector({
  key: "closedIssueListCount",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = { isOpened: "false" };
    return filterIssueList(issueList, filter).length;
  },
});

export const milestoneListState = selector({
  key: "milestoneList",
  get: async () => await getMilestoneList(),
});

export const labelListState = selector({
  key: "labelList",
  get: async () => await getLabelList(),
});

export const userListState = selector({
  key: "userList",
  get: async () => await getUserList(),
});

export const milestoneListCountState = selector({
  key: "milestoneListCount",
  get: ({ get }) => get(milestoneListState).length,
});

export const labelListCountState = selector({
  key: "labelListCount",
  get: ({ get }) => get(labelListState).length,
});
