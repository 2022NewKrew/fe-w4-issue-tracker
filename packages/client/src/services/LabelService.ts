import { Label, LabelForm } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/labels";

class LabelService {
  static async getAll() {
    const { data } = await _axios.get<Label[]>(baseUrl);
    return data;
  }

  static async getById(id: string) {
    const { data } = await _axios.get<Label>(`${baseUrl}/${id}`);
    return data;
  }
  static async post(payload: LabelForm) {
    const newLabel = {
      ...payload,
      id: uuidv4(),
    };
    const { data } = await _axios.post<Label>(baseUrl, newLabel);
    return data;
  }
}

export default LabelService;
function uuidv4() {
  throw new Error("Function not implemented.");
}
