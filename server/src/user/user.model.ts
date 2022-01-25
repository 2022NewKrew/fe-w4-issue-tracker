import { pool } from "../utils/pool";

// 명명법 : 주어+동사

/* ********* 유저 로그인 ********** */
const userSignIn = async (id: string): Promise<any> => {
  try {
    const [result] = await pool.query(`SELECT * FROM user WHERE name='${id}'`);
    const data = result;
    return {
      status: "success",
      data,
    };
  } catch (err: any) {
    if (err.errno === 1062) {
      return {
        status: "duplicate",
        data: err,
      };
    }
    return {
      status: "error",
      data: err,
    };
  }
};

/* ********* 아이디 중복 확인 ********** */
const userCheckOverlap = async (id: any): Promise<any> => {
  try {
    const [result] = await pool.query(`select * from user where name='${id}'`);
    const data: any = result;
    if (data.length === 0) {
      return {
        status: "success",
      };
    }
    return {
      status: "duplicate",
      data,
    };
  } catch (err: any) {
    if (err.errno === 1062) {
      return {
        status: "duplicate",
        data: err,
      };
    }
    return {
      status: "error",
      data: err,
    };
  }
};
/* ********* 유저 회원가입 ********** */
const userSignUp = async (info: any): Promise<any> => {
  try {
    await pool.query(
      `update user set nickname = '${info.nickname}', password = '${info.password}' where unique_key = '${info.token}'`,
    );
    return {
      status: "success",
    };
  } catch (err: any) {
    console.error(err);
    return {
      status: "error",
      data: err,
    };
  }
};

export { userSignIn, userSignUp, userCheckOverlap };
