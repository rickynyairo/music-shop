import http from "http";
import app from "./app";
import log from "fancy-log";
import { routes } from "./routes";

const applyRoutes = (routes, router) => {
  for (const route of routes) {
    const { method, path, controller } = route;
    router[method](path, controller);
  }
};

applyRoutes(routes, app);

// configure port and listen for requests
const server = http.createServer(app);

const port = parseInt(process.env.PORT, 10) || 3001;
server.listen(port, () => {
  log(`Server is running on http://localhost:${port} `);
});
