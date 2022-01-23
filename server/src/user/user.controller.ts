import bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as service from "./user.model"; // model -> service
import { jwtSignUser, response, error, isPassword } from "../utils/lib";

const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, password } = req.body;
    const result = await service.userSignIn(name);
    if (result.status === "success") {
      if (result.data.length === 1) {
        const user = result.data[0];
        if (!user.admin && !(await bcrypt.compare(password, user.password))) {
          error(res, 405, "error");
          return;
        }
        delete user.password;
        const token = jwtSignUser(user);
        response(res, 200, "success", {
          accessToken: token,
          deadLine: 60 * 60 * 24 * 7 * 4,
        });
      } else {
        error(res, 202, "error");
      }
    } else {
      error(res, 500, "error");
    }
  } catch (err) {
    error(res, 500, "error");
  }
};
const checkDup = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.params;
  const result = await service.userCheckOverlap(name);
  if (result.status !== "success") {
    error(res, 200, "error");
  } else {
    response(res, 200, "success");
  }
};

export { signIn, checkDup };
