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

const assigneesList = selector({
  key: "assigneeList",
  get: ({ get }) => {
    const issues = get(issuesState);
    const assignees = [];
    issues &&
      issues.map((issue) => {
        issue.assignees?.map((assignee) => {
          if (assignee && !assignees.includes(assignee.id)) {
            assignees.push(assignee.id);
          }
        });
      });
    return assignees
      ? ["담당자가 없는 이슈", ...assignees]
      : ["담당자가 없는 이슈"];
  },
});

const labelList = selector({
  key: "labelList",
  get: ({ get }) => {
    const issues = get(issuesState);
    const labels = [];
    issues &&
      issues.map((issue) => {
        issue.labels?.map((label) => {
          if (label && !labels.includes(label.name)) {
            labels.push(label.name);
          }
        });
      });
    return labels ? ["레이블이 없는 이슈", ...labels] : ["레이블이 없는 이슈"];
  },
});

const milestoneList = selector({
  key: "milestoneList",
  get: ({ get }) => {
    const issues = get(issuesState);
    const milestones = [];
    issues &&
      issues.map((issue) => {
        if (
          issue.milestone &&
          !milestones.includes(issue.milestone.description)
        ) {
          milestones.push(issue.milestone.description);
        }
      });
    return milestones
      ? ["마일스톤이 없는 이슈", ...milestones]
      : ["마일스톤이 없는 이슈"];
  },
});
const writerList = selector({
  key: "writerList",
  get: ({ get }) => {
    const issues = get(issuesState);
    const writers = [];
    issues &&
      issues.map((issue) => {
        if (!writers.includes(issue.writer.id)) {
          writers.push(issue.writer.id);
        }
      });
    return writers;
  },
});

// 이슈 필터링
// const filteredIssuesState = selector({
//   key: 'filteredISsues',
//   get: ({ get}) => {
//     const filter = get
//   }
// })

export {
  issuesState,
  activeIssueTabState,
  openIssuesState,
  closedIssuesState,
  assigneesList,
  labelList,
  milestoneList,
  writerList,
};
