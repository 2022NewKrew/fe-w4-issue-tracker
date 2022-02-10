import { LabelService, MilestoneService } from "@services";
import { Issue, IssueForm, IssueJSON } from "@types";
import _axios from "@utils/axios";
import { v4 as uuidv4 } from "uuid";
import CommentService from "./CommentService";

const baseUrl = "/issues";

class IssueService {
  static async transfer(issue: IssueJSON) {
    const [labels, milestone] = await Promise.all([
      Promise.all(issue.labels.map(LabelService.getById)),
      issue.milestone ? MilestoneService.getById(issue.milestone) : null,
    ]);
    return {
      ...issue,
      labels,
      milestone,
    };
  }

  static async getAll() {
    const { data } = await _axios.get<IssueJSON[]>(baseUrl);

    return await Promise.all(data.map(IssueService.transfer));
  }
  static async getByIdJSON(id: string) {
    const { data } = await _axios.get<IssueJSON>(`${baseUrl}/${id}`);
    return data;
  }

  static async post(author: string, payload: IssueForm) {
    const { data: issueList } = await _axios.get<IssueJSON[]>(
      `${baseUrl}?author=${author}`
    );
    const nextNum = issueList.length + 1;
    const issueId = uuidv4();
    const commentId = uuidv4();
    const newIssue: IssueJSON = {
      ...payload,
      id: issueId,
      num: nextNum,
      status: "open",
      author,
      timestamp: new Date().toUTCString(),
      comments: [commentId],
    };

    const [{ data }, _] = await Promise.all([
      _axios.post<IssueJSON>(baseUrl, newIssue),
      CommentService.post({
        author,
        issueId,
        commentForm: {
          content: payload.comment,
          status: "initial",
        },
      }),
    ]);
    return data;
  }

  static async patchChangeTitle({
    issueId,
    title,
  }: {
    issueId: string;
    title: string;
  }) {
    const { data } = await _axios.patch<Issue>(`${baseUrl}/${issueId}`, {
      title,
    });
    return data;
  }

  static async patchChangeStatus(issueId: string, status: "open" | "close") {
    const [{ data }, _] = await Promise.all([
      _axios.patch<Issue>(`${baseUrl}/${issueId}`, {
        status,
      }),
      CommentService.post({
        author: "user1",
        issueId,
        commentForm: {
          content:
            status === "close"
              ? "이슈가 닫혔습니다."
              : "이슈가 다시 열렸습니다.",
          status: status === "close" ? "closed" : "reopen",
        },
      }),
    ]);

    return data;
  }
  static async patchAddComment({
    issueId,
    commentId,
  }: {
    issueId: string;
    commentId: string;
  }) {
    const issueIdList = await this.getByIdJSON(issueId);
    const { data } = await _axios.patch<IssueJSON>(`${baseUrl}/${issueId}`, {
      comments: [...issueIdList.comments, commentId],
    });
    return data;
  }
  static async patchRemoveComment({
    issueId,
    commentId,
  }: {
    issueId: string;
    commentId: string;
  }) {
    const issueIdList = await this.getByIdJSON(issueId);
    const { data } = await _axios.patch<IssueJSON>(`${baseUrl}/${issueId}`, {
      comments: issueIdList.comments.filter((id) => id !== commentId),
    });
    return data;
  }
}

export default IssueService;
