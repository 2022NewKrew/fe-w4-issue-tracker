import { Label } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/labels";

class LabelService {
  static async getById(id: string) {
    const { data } = await _axios.get<Label>(`${baseUrl}/${id}`);
    return data;
  }
}

export default LabelService;
