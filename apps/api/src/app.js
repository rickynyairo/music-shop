import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
// import expressValidator from "express-validator";

const app = express();

app.use(morgan("combined"));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.json());
// app.use(expressValidator());

app.use("*", (req, res) =>
  res.status(404).json({
    message: "Resource Not Found."
  })
);

export default app;
