require("dotenv").config({ path: "./.env" });

const express = require("express");
const app = express();

//logger
const logger = require("morgan");
app.use(logger("tiny"));

//routes
app.get("/", require("./routes/routes"));

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);
