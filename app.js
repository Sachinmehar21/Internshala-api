require("dotenv").config({ path: "./.env" });

const express = require("express");
const app = express();

//logger
const logger = require("morgan");
app.use(logger("tiny"));

//Error handlinge
const ErrorHandler = require("./Utils/Errorhandler");
const { generatedErrors } = require("./Middlewares/Errors");
app.get("*", (req, res, next) => {
  next(new ErrorHandler(`Requested URL not Found ${req.url}`, 404));
});
app.use(generatedErrors);

app.get("/", require("./routes/routes"));

app.listen(
  process.env.PORT,
  console.log(`server running on port ${process.env.PORT}`)
);