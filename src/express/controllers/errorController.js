const { env } = require("process")
const { errorLogger } = require('./loggerController')

//error info to serve during development
const sendDevError = (err, res) => {
    res.status(err.statusCode).json({
        error: true,
        statusCode: err.statusCode,
        status: err.status,
        message: err.message,
        errorCode: err.errorCode,
        data: err.data,
        stack: err.stack,
        err
    });
}

//error info to serve during production
const sendProdError = (err, req, res) => {
    //operational error, provide message to the client - usually errors with user input (4XX)
    if(err.isOperational) {
        res.status(err.statusCode).json({
            error: true,
            statusCode: err.statusCode,
            status: err.status,
            message: err.message,
            errorCode: err.errorCode,
            data: err.data
        });
        
    //programming or other unknown error - preventing leak of info to the client
    } else {
        res.status(500).json({
            error: true,
            statusCode: 500,
            status: "error",
            message: "Something went wrong.",
            errorCode: err.errorCode,
        })

        //logging error
        errorLogger(req, {
            name: err.name,
            stack: err.stack
        });
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if(env.NODE_ENV === env.ENV_DEV) {
        sendDevError(err, res);
    } else if(env.NODE_ENV === env.ENV_PROD) {
        sendProdError(err, req, res)
    }
}