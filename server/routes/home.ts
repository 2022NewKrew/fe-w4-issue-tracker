import express, { Request, Response } from "express";
const router = express.Router();

router.use("/", (req: Request, res: Response, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

router.get("/", (req: Request, res: Response) => {
  res.render("index");
});

export default router;
