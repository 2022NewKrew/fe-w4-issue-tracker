import { selector, atom } from "recoil";
import { getIssueList } from "@/firebase.js";
import { filterState } from "@/stores/filterStore.js";

export const forceIssueListUpdate = atom({
  key: "issueListUpdater",
  default: 0,
});

export const issueListState = selector({
  key: "issueList",
  get: async ({ get }) => {
    get(forceIssueListUpdate);
    return await getIssueList();
  },
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
    const filter = { isOpened: true };
    return filterIssueList(issueList, filter).length;
  },
});

export const closedIssueListCountState = selector({
  key: "closedIssueListCount",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = { isOpened: false };
    return filterIssueList(issueList, filter).length;
  },
});

const filterIssueList = (issueList, filter) => {
  return issueList.filter((issue) => {
    return filterIssue(issue, filter);
  });
};

const filterIssue = (issue, filter) => {
  const issuePropEntries = Object.entries(issue);
  return issuePropEntries.every(([property, propertyValue]) => {
    return checkPropValidity(property, propertyValue, filter);
  });
};

const checkPropValidity = (property, propertyValue, filter) => {
  const filterValue = filter[property];

  if (filterValue === undefined || filterValue === "*") {
    return true;
  }
  if (Array.isArray(propertyValue)) {
    // for "label", "assignee" prop
    return filterArrayValue(propertyValue, filterValue);
  } else if (propertyValue instanceof Object) {
    // for "writer" prop
    return filterObjectValue(propertyValue, filterValue);
  } else {
    // for "isOpened", "milestone" prop
    return propertyValue === filterValue;
  }
};

const filterArrayValue = (propertyValue, filterValue) => {
  return propertyValue.some(
    (value) => value === filterValue || value.name === filterValue
  );
};

const filterObjectValue = (propertyValue, filterValue) => {
  return propertyValue.name === filterValue;
};
