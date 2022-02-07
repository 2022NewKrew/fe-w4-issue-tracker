import { useQuery } from "react-query";

import { User } from "@types";
import { UserService } from "@services";

export const useGetUsers = () =>
  useQuery<User[], Error>("users", UserService.getAll);
