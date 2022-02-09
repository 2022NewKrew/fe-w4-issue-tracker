import { Label, LabelForm } from "@types";
import _axios from "@utils/axios";
import { v4 as uuidv4 } from "uuid";

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
  static async patch(id: string, payload: LabelForm) {
    const { data } = await _axios.patch<Label>(`${baseUrl}/${id}`, {
      ...payload,
      id,
    });
    return data;
  }
  static async delete(id: string) {
    const { data } = await _axios.delete(`${baseUrl}/${id}`);
    return data;
  }
}

export default LabelService;
