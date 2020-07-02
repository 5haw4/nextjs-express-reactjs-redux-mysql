class AppError extends Error {
    constructor(data = undefined, statusCode = 500) {
        let message = "Unknown error occurred";
        let errorCode;
        //moving the "errorCode" and "message" from the data object to the base of the json
        if(data) {
            if(data.errorCode) {
                errorCode = data.errorCode;
                delete data.errorCode;
            }
            if(data.message) {
                message = data.message;
                delete data.message;
            } else {
                message = data;
                data = undefined
            }
        }
        //if the data object is empty - setting it as undefined so it won't be served with the response
        if(!data || Object.keys(data).length <= 0) {
            data = undefined;
        }
        
        super(message);
        this.errorCode = errorCode; //your errorCode to flag the frontend about certain errors (can be empty)
        this.data = data; //data to serve with the response
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError;