import { MilestoneJSON } from "@types";
import _axios from "@utils/axios";

const baseURL = "/milestones";

class MilestoneService {
  static async getNameById(id: string) {
    const { data } = await _axios.get<MilestoneJSON>(`${baseURL}/${id}`);
    return data.name;
  }
}

export default MilestoneService;
