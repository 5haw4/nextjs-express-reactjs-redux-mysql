class AppResponse {
    constructor(res, data = undefined, statusCode = 200, status = "success") {
        let message;
        //moving the "message" from the data object to the base of the json
        if(data) message = data.message;
        if(message) delete data.message;
        if(!data || Object.keys(data).length <= 0) {
            data = undefined;
        }

        //serving all successful requests with the following structure
        res.status(statusCode).json({
            error: false,
            status: status,
            message,
            data
        });
    }
}

module.exports = AppResponse;