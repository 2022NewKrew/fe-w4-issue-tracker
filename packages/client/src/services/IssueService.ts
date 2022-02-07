import { LabelService, MilestoneService } from "@services";
import { Issue } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/issues";

class IssueService {
  static async get() {
    const { data } = await _axios.get<Issue[]>(baseUrl);

    const transfer = async (issue: Issue) => {
      const [labels, milestone] = await Promise.all([
        Promise.all(issue.labels.map(LabelService.getById)),
        issue.milestone ? MilestoneService.getNameById(issue.milestone) : null,
      ]);
      return {
        ...issue,
        labels,
        milestone,
      };
    };

    return await Promise.all(data.map(transfer));
  }
}

export default IssueService;
