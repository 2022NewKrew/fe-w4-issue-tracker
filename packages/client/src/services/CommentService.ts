import _axios from "@utils/axios";
import { Comment, CommentForm } from "@types";
import { v4 as uuidv4 } from "uuid";
import IssueService from "./IssueService";

const baseUrl = "/comments";

class CommentService {
  static async getAll(issueId: string) {
    const { data } = await _axios.get<Comment[]>(
      `${baseUrl}?issueId=${issueId}`
    );
    return data;
  }
  static async post({
    author,
    issueId,
    commentForm,
  }: {
    author: string;
    issueId: string;
    commentForm: CommentForm;
  }) {
    const id = uuidv4();
    const newComment: Comment = {
      id,
      author,
      issueId,
      status: "initial",
      ...commentForm,
    };
    const [{ data }, _] = await Promise.all([
      _axios.post<Comment>(`${baseUrl}`, newComment),
      IssueService.patchAddComment({ issueId, commentId: id }),
    ]);

    return data;
  }
  static async patch({
    commentId,
    commentForm,
  }: {
    commentId: string;
    commentForm: CommentForm;
  }) {
    const { data } = await _axios.patch<Comment>(
      `${baseUrl}/${commentId}`,
      commentForm
    );
    return data;
  }
  static async delete({
    commentId,
    issueId,
  }: {
    commentId: string;
    issueId: string;
  }) {
    const [{ data }, _] = await Promise.all([
      _axios.delete(`${baseUrl}/${commentId}`),
      IssueService.patchRemoveComment({ issueId, commentId }),
    ]);

    return data;
  }
  static async deleteByIssue(id: string) {
    const { data } = await _axios.delete(`${baseUrl}/${id}`);
    return data;
  }
}

export default CommentService;
