declare module "@types" {
  type CommentStatus = "initial" | "closed" | "reopen";

  interface Comment {
    id: string;
    content: string;
    author: string;
    status: CommentStatus;
    issueId: string;
  }

  interface CommentForm {
    content: string;
    status?: CommentStatus;
  }
}
