declare module "@types" {
  type IssueStatus = "open" | "close";

  interface IssueJSON {
    id: string;
    num: number;
    title: string;
    assignees: string[];
    milestone: string | null;
    labels: string[];
    author: string;
    status: IssueStatus;
    timestamp: string;
  }

  interface Issue extends IssueJSON {
    labels: Label[];
    milestone: MilestoneJSON | null;
  }

  interface IssueDetail extends Issue {
    comments: Comment[];
    assignees: User[];
  }

  interface IssueRequest {
    title: string;
    comment: string;
    labels: string[];
    assignees: string[];
    milestone?: string | null;
  }
}
