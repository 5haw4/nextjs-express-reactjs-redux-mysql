const { env } = require("process")
const mysql = require("mysql");

module.exports = mysql.createPool({
    connectionLimit: env.NODE_ENV == env.ENV_PROD ? env.DB_CON_LIMIT : env.DB_CON_LIMIT_DEV,
    host: env.NODE_ENV == env.ENV_PROD ? env.DB_HOST : env.DB_HOST_DEV,
    user: env.NODE_ENV == env.ENV_PROD ? env.DB_USER : env.DB_USER_DEV,
    password: env.NODE_ENV == env.ENV_PROD ? env.DB_PASS : env.DB_PASS_DEV,
    database: env.NODE_ENV == env.ENV_PROD ? env.DB_NAME : env.DB_NAME_DEV,
})