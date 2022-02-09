declare module "@types" {
  type CommentStatus = "initial" | "closed" | "reopen";

  interface Comment {
    id: string;
    content: string;
    /**
     * status를 변경한 유저를 기입
     */
    author: string;
    status: CommentStatus;
  }

  interface CommentRequest {
    content: string;
    status?: CommentStatus;
  }
}
