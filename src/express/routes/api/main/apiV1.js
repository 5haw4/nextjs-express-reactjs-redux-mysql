const express = require('express')
const AppError = require("../../../utils/appError")

const exampleRouter = require('../v1/exampleRouter')

const router = express.Router()
const apiBaseRoute = "/api/v1";

router.use(`${apiBaseRoute}/examples`, exampleRouter)

//API 404 response
router.all(`${apiBaseRoute}/*`, (req, res, next) => {
    next(new AppError("Endpoint not found", 404));
})

module.exports = router;