require("dotenv").config();
const url = require("url");

const dialect = "postgres";
const databaseUrl = process.env.DATABASE_URL;
let connUrl;
let dbProperties;

if (databaseUrl) {
  connUrl = url.parse(databaseUrl);
  dbProperties = {
    username: connUrl.auth.split(":")[0],
    password: connUrl.auth.split(":")[1],
    host: connUrl.hostname,
    database: connUrl.pathname.slice(1),
    port: parseInt(connUrl.port)
  };
}

const config = {
  databaseUrl,
  dialect,
  logging: !isProduction ? log => log : false,
  dialectOptions: {
    multipleStatements: true,
    require: true
  },
  ssl: false,
  operatorsAliases: false,
  isProduction: false,
  environment,
  ...dbProperties
};

module.exports = config;
