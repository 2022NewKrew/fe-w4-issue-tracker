import { atom, selector } from "recoil";

const issuesState = atom({
  key: "issues",
  default: null,
});

const issueState = atom({
  key: "issue",
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

const usersList = atom({
  key: "usersList",
  default: [],
});

const milestoneList = atom({
  key: "milestoneList",
  default: [],
});

const labelList = atom({
  key: "labelList",
  default: [],
});

// const assigneesList = selector({
//   key: "assigneeList",
//   get: ({ get }) => {
//     const issues = get(issuesState);
//     const assignees = [{ id: 0, name: "담당자가 없는 이슈" }];
//     issues &&
//       issues.map((issue) => {
//         issue.assignees?.map((assignee) => {
//           if (assignee) {
//             assignees.push({ id: assignee.id, name: assignee.name });
//           }
//         });
//       });
//     const filteredAssignees = [
//       ...new Map(
//         assignees.map((assignee) => [assignee["id"], assignee])
//       ).values(),
//     ];
//     return filteredAssignees;
//   },
// });

// const labelList = selector({
//   key: "labelList",
//   get: ({ get }) => {
//     const issues = get(issuesState);
//     const labels = [{ id: 0, name: "레이블이 없는 이슈" }];
//     issues &&
//       issues.map((issue) => {
//         issue.labels?.map((label) => {
//           if (label) {
//             labels.push({ id: label.id, name: label.name });
//           }
//         });
//       });
//     const filteredLabels = [
//       ...new Map(labels.map((label) => [label["id"], label])).values(),
//     ];
//     return filteredLabels;
//   },
// });

// const milestoneList = selector({
//   key: "milestoneList",
//   get: ({ get }) => {
//     const issues = get(issuesState);
//     const milestones = [{ id: 0, name: "마일스톤이 없는 이슈" }];
//     issues &&
//       issues.map((issue) => {
//         if (issue.milestone) {
//           milestones.push({
//             id: issue.milestone.id,
//             name: issue.milestone.title,
//           });
//         }
//       });

//     const filteredMilestones = [
//       ...new Map(
//         milestones.map((milestone) => [milestone["id"], milestone])
//       ).values(),
//     ];
//     return filteredMilestones;
//   },
// });

const writerList = selector({
  key: "writerList",
  get: ({ get }) => {
    const issues = get(issuesState);
    const writers = [];
    issues &&
      issues.map((issue) => {
        if (!writers.includes(issue.writer.id)) {
          writers.push({ id: issue.writer.id, name: issue.writer.name });
        }
      });

    const filteredWriters = [
      ...new Map(writers.map((writer) => [writer["id"], writer])).values(),
    ];
    return filteredWriters;
  },
});

// 이슈 필터링
// const filteredIssuesState = selector({
//   key: 'filteredIssues',
//   get: ({ get}) => {
//     const filter = get
//   }
// })

export {
  issuesState,
  issueState,
  activeIssueTabState,
  openIssuesState,
  closedIssuesState,
  usersList,
  // assigneesList,
  labelList,
  milestoneList,
  writerList,
};
