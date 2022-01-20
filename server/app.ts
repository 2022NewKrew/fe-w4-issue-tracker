import express from "express";
import engines from "consolidate";

import userRouter from "./routes/user";
import apiRouter from "./routes/api";

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("html", engines.mustache);
app.set("view engine", "html");
app.set("views", __dirname + "/dist");

app.use("/", userRouter);
app.use("/api", apiRouter);

app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/dist"));

app.listen(PORT, () => {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
