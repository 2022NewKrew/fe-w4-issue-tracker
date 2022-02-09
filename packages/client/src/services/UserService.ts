import { User } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/users";

class UserService {
  static async getAll() {
    const { data } = await _axios.get<User[]>(baseUrl);
    return data;
  }

  static async getById(id: string) {
    const { data } = await _axios.get<User>(`${baseUrl}/${id}`);
    return data;
  }
}

export default UserService;
