import { PROCESS_ENV } from "./constants";
import { userRouter } from "./routes";
import { printJson } from "./util";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const session = require("express-session");

const {
  DEFAULT_PORT,
  SESS_SECRET,
  SESS_NAME,
  SESS_TIME_LIMIT,
  NODE_ENV
} = PROCESS_ENV;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(
  session({
    name: SESS_NAME,
    resave: false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_TIME_LIMIT,
      sameSite: false,
      secure: NODE_ENV === "production"
    }
  })
);

app.get("/", (req, res) => {
  console.log("query params =>" + printJson(req.query));
  res.json({ status: "ok", payload: { a: 10, b: 15 }, yourQuery: req.query });
});

app.use("/user", userRouter);

app.listen(DEFAULT_PORT, () => {
  console.log("listening on port " + PORT);
});
