require("dotenv").config();
const url = require("url");

const dialect = "postgres";
const databaseUrl = process.env.DATABASE_URL;
let connUrl;
let dbProperties;

try {
  connUrl = url.parse(databaseUrl);
  dbProperties = {
    username: connUrl.auth.split(":")[0],
    password: connUrl.auth.split(":")[1],
    host: connUrl.hostname,
    database: connUrl.pathname.slice(1),
    port: parseInt(connUrl.port)
  };
} catch (error) {
  console.log("connection error>>>>>n\n\n", error);
  throw error;
}

const config = {
  databaseUrl,
  dialect,
  logging: console.log,
  dialectOptions: {
    multipleStatements: true,
    require: true
  },
  ssl: false,
  isProduction: false,
  environment: process.env.NODE_ENV,
  ...dbProperties
};

module.exports = config;
