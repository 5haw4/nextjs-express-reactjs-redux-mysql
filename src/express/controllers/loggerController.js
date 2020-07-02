const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const { env } = require("process")

/*
    logging all activity with the server:
        - during dev printing minimal info to console logs
        - during prod dumping to access.log file
*/
module.exports.activityLogger = () => {
    if(env.NODE_ENV == env.ENV_PROD) {
        // create a write stream (in append mode)
        var accessLogStream = fs.createWriteStream(path.join('access.log'), { flags: 'a' })
        return morgan(
            'Remote Address: :req[x-forwarded-for] :remote-addr Remote User: :remote-user Time: [:date[clf]] Method: :method URL: :url HTTP Type: HTTP/:http-version Req Auth Header: :req[Authorization] Req Accept Header: :req[Accept] Req Content-Type Header: :req[Content-Type] Response Status Code: :status Response Content Length: :res[content-length] Response Time: :response-time  Total Millis Time: :total-time[digits] Referrer: :referrer User Agent: :user-agent'
            , { stream: accessLogStream })
    } else if(env.NODE_ENV == env.ENV_DEV) {
        return morgan(':method :url :status :res[content-length] - :response-time ms')
    }
}

//errors logger - log crashes and programming errors
module.exports.errorLogger = (req, err, callback = () => {}) => {
    //if has request object then trying to extract user info out of it (like user agent and IP)
    const info = (req) ?
    {
        userId: req.user && req.user.id,
        user: req.user ? req.user : null,
        remoteAddress: req.header('x-forwarded-for') || req.connection.remoteAddress,
        time: new Date(),
        method: req.method,
        url: req.url,
        userAgent: req.headers['user-agent'],
        headers: req.rawHeaders,
        err: {
            name: err.name, 
            stack: err.stack
        },
    } 
    :
    {
        err: {
            name: err.name, 
            stack: err.stack
        },
        time: new Date(),
    }
    fs.appendFile('error.log', `${JSON.stringify(info)}\n`, function (error) {
        if(env.NODE_ENV == env.ENV_DEV) {
            if (error) console.log("Error while logging error", error);
            else console.log('Error log saved to error.log');
        }
        callback();
    });
}

