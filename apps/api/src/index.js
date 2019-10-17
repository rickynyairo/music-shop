import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { applyRoutes, applyMiddleware } from "./utils";
import errorHandlers from "./middleware/errors";
import log from "fancy-log";
import http from "http";
import cors from "cors";

const app = express();

app.use(morgan("combined"));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

// configure port and listen for requests
const server = http.createServer(app);

const port = parseInt(process.env.API_PORT, 10) || 3001;
server.listen(port, () => {
  log(`Server is running on http://localhost:${port} `);
});

export default app;
