import http from "http";
import app from "./app";
import log from "fancy-log";

const server = http.createServer(app);

// configure port and listen for requests
const port = parseInt(process.env.PORT, 10) || 3001;
server.listen(port, () => {
  log(`Server is running on http://localhost:${port} `);
});
