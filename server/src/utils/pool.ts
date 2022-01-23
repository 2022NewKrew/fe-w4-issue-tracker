import mysql from "mysql2";
import { dbConfig } from "../../config";

interface DBresult {
  status: string;
  data: Array<JSON>;
}
const pool = mysql.createPool(dbConfig).promise();

export { pool };
export type { DBresult };
