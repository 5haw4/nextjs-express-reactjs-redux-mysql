const express = require('express')
const { createExample, getAllExamples, updateExample, getExampleById, deleteExample
} = require("../../../controllers/exampleController")

const router = express.Router()

//example basic CRUD functionality
router.route("/")
    .get(getAllExamples)
    .post(createExample)
    .patch(updateExample)
router.route("/:id")
    .get(getExampleById)
    .delete(deleteExample)

module.exports = router