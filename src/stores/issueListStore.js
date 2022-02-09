import { selector, atom } from "recoil";
import { getIssueList } from "@/firebase.js";
import { filterState } from "@/stores/filterStore.js";
import { labelListState } from "@/stores/labelListStore.js";
import { milestoneListState } from "@/stores/milestoneListStore.js";
import { userListState } from "@/stores/userListStore.js";
import {
  findObjectListWithIdFromList,
  findObjectWithIdFromList,
  findObjectWithTextFromList,
} from "@utils";

export const forceIssueListUpdate = atom({
  key: "issueListUpdater",
  default: 0,
});

export const issueListState = selector({
  key: "issueList",
  get: async ({ get }) => {
    get(forceIssueListUpdate);
    const rawIssueList = await getIssueList();
    const labelList = await get(labelListState);
    const milestoneList = await get(milestoneListState);
    const userList = await get(userListState);
    const processedIssueList = rawIssueList.map(
      ({ label, milestone, writer, assignee, ...restData }) => {
        return {
          ...restData,
          label: findObjectListWithIdFromList(label, labelList),
          milestone: findObjectWithIdFromList(milestone, milestoneList),
          assignee: findObjectListWithIdFromList(assignee, userList),
          writer: findObjectWithIdFromList(writer, userList),
        };
      }
    );
    return processedIssueList;
  },
});

export const filteredIssueListState = selector({
  key: "filteredIssueList",
  get: async ({ get }) => {
    const issueList = await get(issueListState);
    const filter = get(filterState);
    return filterIssueList(issueList, filter);
  },
});

export const openedIssueListCountState = selector({
  key: "openedIssueListCount",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = get(filterState);
    const filterWithOpened = { ...filter, isOpened: true };
    return filterIssueList(issueList, filterWithOpened).length;
  },
});

export const closedIssueListCountState = selector({
  key: "closedIssueListCount",
  get: ({ get }) => {
    const issueList = get(issueListState);
    const filter = get(filterState);
    const filterWithNotOpened = { ...filter, isOpened: false };
    return filterIssueList(issueList, filterWithNotOpened).length;
  },
});

const filterIssueList = (issueList, filter) => {
  return issueList.filter((issue) => {
    const isIssueValidate = checkIssueValidity(issue, filter);
    return isIssueValidate;
  });
};

const checkIssueValidity = (issue, filter) => {
  const issuePropEntries = Object.entries(issue);
  return issuePropEntries.every(([property, propertyValue]) => {
    const isPropValidate = checkPropValidity(property, propertyValue, filter);
    return isPropValidate;
  });
};

const checkPropValidity = (property, propertyValue, filter) => {
  const filterValue = filter[property];
  if (filterValue === undefined || filterValue === "*") {
    return true;
  }
  if (Array.isArray(propertyValue)) {
    // for "label", "assignee" prop
    const validateObject = findObjectWithTextFromList(
      filterValue,
      propertyValue
    );
    return validateObject;
  } else if (typeof propertyValue === "boolean") {
    // for "isOpened" prop
    return propertyValue === filterValue;
  } else {
    // for "milestone", "writer" prop
    const propertyText = propertyValue.text || propertyValue.name;
    return propertyText === filterValue;
  }
};
