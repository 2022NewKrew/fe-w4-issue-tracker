import express, { Request, Response } from "express";
import { pool } from "../utils/pool";

const router = express.Router();

router.use("/", (req: Request, res: Response, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const [result] = await pool.query(`select * from hotdeal`);
    res.status(200).json({
      result,
    });
  } catch (e) {
    console.error(e);
    res.status(404);
  }
});

export default router;
