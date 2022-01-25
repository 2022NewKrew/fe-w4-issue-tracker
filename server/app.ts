import express from "express";
import engines from "consolidate";
import homeRouter from "./routes/home";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.engine("html", engines.mustache);
app.set("view engine", "html");
app.set("views", __dirname + "/dist");

app.use("/home", homeRouter);
app.use("/user", userRouter);

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
