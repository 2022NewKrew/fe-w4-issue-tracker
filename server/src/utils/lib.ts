/* eslint-disable operator-linebreak */
import jwt from "jsonwebtoken";
import { Response } from "express";
import { jwtSecret } from "../../config";

export interface User {
  id: number;
  name: string;
}

function jwtSignUser(user: User): string {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  const ONE_MONTH = 60 * 60 * 24 * 7 * 4;
  return jwt.sign({ data: user }, jwtSecret, {
    expiresIn: ONE_MONTH,
  });
}

function jwtSignPhone(phoneNumber: string): string {
  const timeout = 300;
  return jwt.sign({ data: phoneNumber }, jwtSecret, {
    expiresIn: timeout,
  });
}

function jwtSignUpdatePw(
  phone: string,
  email: string,
  name: string,
  type: string,
): string {
  const timeout = 300;
  return jwt.sign(
    {
      phone,
      email,
      name,
      type,
    },
    jwtSecret,
    {
      expiresIn: timeout,
    },
  );
}

function jwtVerify(token: string): any {
  try {
    const decode = jwt.verify(token, jwtSecret);
    return decode;
  } catch {
    return {};
  }
}

function isEmail(asValue: string): boolean {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

function isPassword(input: string): boolean {
  const regExpPw = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return regExpPw.test(input);
}

function isPhone(input: string): boolean {
  const regExpPw = /^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;
  return regExpPw.test(input);
}

function response(
  res: Response,
  code: number,
  status: string,
  data: any = {},
): any {
  return res.status(code).json({
    status,
    data,
  });
}
function error(
  res: Response,
  code: number,
  status: string,
  errCode?: any,
  message?: any,
): any {
  return res.status(code).json({
    status,
    data: errCode,
    message,
  });
}

// eslint-disable-next-line max-len
export {
  jwtSignUser,
  jwtSignPhone,
  jwtSignUpdatePw,
  jwtVerify,
  isEmail,
  isPhone,
  isPassword,
  response,
  error,
};
