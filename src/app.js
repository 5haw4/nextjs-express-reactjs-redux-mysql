const { env } = require("process")
const express = require("express");
const rateLimit = require("express-rate-limit")
const { activityLogger } = require("./express/controllers/loggerController")
const cookieParser = require('cookie-parser')
const helmet = require("helmet")
const path = require('path');
const apiV1 = require("./express/routes/api/main/apiV1")
const globalErrorHandler = require("./express/controllers/errorController")

var app = express();

//allowing only up to 25 requests per IP per second
if(env.NODE_ENV == env.ENV_PROD) {
    //limiting each IP to 25 requests per second
    app.use(rateLimit({
        max: 25, 
        windowMs: 1000,
        message: { 
            error: true, 
            status: "error", 
            message:"too many requests"
        }
    }))
}

//logging all requests and responses
app.use(activityLogger())

//for parsing json encoded and url encoded request bodies
app.use("*", 
    express.urlencoded({ extended: true, limit: env.DEFAULT_REQUEST_LIMIT }),
    express.json({ limit: env.DEFAULT_REQUEST_LIMIT })
)

//using cookie parser
app.use(cookieParser(env.SIGNED_COOKIES_SECRENT))

//overides default headers to defend againts all sorts of attacks
app.use(helmet())

//setting up API routes
app.use("/", apiV1)

//error handling middleware
app.use(globalErrorHandler)

module.exports = app;