const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const printJson = json => {
  return JSON.stringify(json);
};

app.get("/", (req, res) => {
  console.log("query params =>" + printJson(req.query));
  res.json({ status: "ok", payload: { a: 10, b: 15 }, yourQuery:req.query });
});

app.use('/user', require('./routes/login'))

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
