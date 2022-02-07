declare module "@types" {
  type IssueStatus = "open" | "close";

  interface Issue {
    id: string;
    num: number;
    title: string;
    milestone: string | null;
    labels: LabelDTO[];
    author: string;
    status: IssueStatus;
    timestamp: string;
  }

  interface IssueDetail extends Issue {
    comments: CommentDTO[];
    assignees: UserDTO[];
  }

  interface IssueRequest {
    title: string;
    comment: string;
    labels: string[];
    assignees: string[];
    milestone?: string | null;
  }
}
