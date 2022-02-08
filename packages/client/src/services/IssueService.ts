import { LabelService, MilestoneService } from "@services";
import { Issue, IssueJSON } from "@types";
import _axios from "@utils/axios";

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
  static async patchChangeStatus(issueId: string, status: "open" | "close") {
    const { data } = await _axios.patch<Issue>(`${baseUrl}/${issueId}`, {
      status,
    });
    console.log(data);
    return data;
  }
}

export default IssueService;
