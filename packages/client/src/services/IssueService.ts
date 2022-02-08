import { LabelService, MilestoneService } from "@services";
import { Issue, IssueForm, IssueJSON } from "@types";
import _axios from "@utils/axios";
import { v4 as uuidv4 } from "uuid";

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
  static async post(userId: string, payload: IssueForm) {
    const { data: issueList } = await _axios.get<IssueJSON[]>(
      `${baseUrl}?author=${userId}`
    );
    const nextNum = issueList.length + 1;
    const issueId = uuidv4();
    const commentId = uuidv4();
    const newIssue: IssueJSON = {
      ...payload,
      id: issueId,
      num: nextNum,
      status: "open",
      author: userId,
      timestamp: new Date().toUTCString(),
      comments: [commentId],
    };
    const { data } = await _axios.post<IssueJSON>(baseUrl, newIssue);

    return data;
  }
  // static async post(userId: string, payload: IssueRequestDTO) {

  //   const [_, __, { data }] = await Promise.all([
  //     CommentService.post(commentId, userId, {
  //       content: payload.comment || "No description provided.",
  //     }),
  //     milestoneId && MilestoneService.patchAddIssue(milestoneId, issueId),
  //     _axios.post<IssueDTO>(baseUrl, newIssue),
  //   ]);

  //   return data;
  // }
  static async patchChangeStatus(issueId: string, status: "open" | "close") {
    const { data } = await _axios.patch<Issue>(`${baseUrl}/${issueId}`, {
      status,
    });
    console.log(data);
    return data;
  }
}

export default IssueService;
