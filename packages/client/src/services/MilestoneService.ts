import { Milestone, MilestoneJSON } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/milestones";

class MilestoneService {
  static async getAll() {
    const { data } = await _axios.get<Milestone[]>(baseUrl);
    return data;
  }
  static async getById(id: string) {
    const { data } = await _axios.get<MilestoneJSON>(`${baseUrl}/${id}`);
    return data;
  }
}

export default MilestoneService;
