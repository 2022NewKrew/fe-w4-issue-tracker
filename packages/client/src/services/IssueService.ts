import { LabelService, MilestoneService } from "@services";
import { IssueJSON, IssueStatus } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/issues";

class IssueService {
  static async transfer(issue: IssueJSON) {
    const [labels, milestone] = await Promise.all([
      Promise.all(issue.labels.map(LabelService.getById)),
      issue.milestone ? MilestoneService.getNameById(issue.milestone) : null,
    ]);
    return {
      ...issue,
      labels,
      milestone,
    };
  }

  static async get(issueStatus: IssueStatus) {
    const { data } = await _axios.get<IssueJSON[]>(
      `${baseUrl}?status=${issueStatus}`
    );

    return await Promise.all(data.map(IssueService.transfer));
  }
}

export default IssueService;
