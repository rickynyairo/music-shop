import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize/models";

const app = express();

app.use(morgan("combined"));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.json());

// create database tables
// will move logic to migrations
// sequelize.sync();

export default app;
