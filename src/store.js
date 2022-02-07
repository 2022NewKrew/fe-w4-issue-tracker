import { atom, selector } from "recoil";
import { getIssueList } from "@/firebase.js";

export const filterState = atom({
  key: "filter",
  default: {
    isOpened: true,
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
  get: async ({ get }) => {
    const issueList = await getIssueList();
    const filter = get(filterState);
    return filterIssueList(issueList, filter);
  },
});
