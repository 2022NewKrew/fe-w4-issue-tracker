import { NextFunction, Request, Response } from "express";
import { jwtVerify, error } from "./lib";

const authorization = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { authorization: token } = req.headers;
  if (typeof token === "undefined") {
    error(res, 403, "error", { errCode: 201 });
    return;
  }
  try {
    const { id, type } = jwtVerify(token as string).data;
    if (typeof id === "undefined" || typeof type === "undefined") {
      error(res, 403, "error", { errCode: 201 });
      return;
    }
    res.locals.id = id;
    res.locals.type = type;
    next();
  } catch (err) {
    error(res, 403, "error", { errCode: 202 });
  }
};

const checkAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const { id, type } = res.locals;
  if (type === "admin") next();
  else error(res, 403, "error", { errCode: 0 });
};

export { authorization, checkAdmin };
