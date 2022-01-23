import express from "express";
import * as controller from "../src/user/user.controller";
import * as auth from "../src/utils/auth";

const router = express.Router();

router.get("/signin", controller.signIn);
router.get("/checkdup/:name", controller.checkDup);
export default router;
