import { UserJSON, User } from "@types";
import _axios from "@utils/axios";

const baseUrl = "/users";

class UserService {
  static transfer({ id, name }: UserJSON) {
    return { id, name };
  }

  static async getAll() {
    const { data } = await _axios.get<UserJSON[]>(baseUrl);
    return data.map(UserService.transfer);
  }

  static async getById(
    id: string,
    transfer?: boolean
  ): Promise<UserJSON | User> {
    try {
      const { data } = await _axios.get<UserJSON>(`${baseUrl}/${id}`);
      if (transfer === false) return data;
      return UserService.transfer(data);
    } catch (e) {
      throw Error("존재하지 않는 사용자 입니다.");
    }
  }
  static async login({ id, pw }: { id: string; pw: string }) {
    const user = (await UserService.getById(id, false)) as UserJSON;
    if (pw !== user.pw) {
      throw Error("비밀번호가 틀렸습니다.");
    }
    return UserService.transfer(user);
  }
}

export default UserService;
