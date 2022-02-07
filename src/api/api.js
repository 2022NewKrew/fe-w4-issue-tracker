const BaseURL = "http://localhost:1234/api";

export const getIssues = () => fetch(`${BaseURL}/issues`).then((res) => res.json());
export const getLabels = () => fetch(`${BaseURL}/labels`).then((res) => res.json());
export const getMilestones = () => fetch(`${BaseURL}/milestones`).then((res) => res.json());
export const patchCheckedIssue = (idList) =>
  fetch(`${BaseURL}/issues`, {
    method: "PATCH",
    body: JSON.stringify(idList),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
