const catchAsync = require("../utils/catchAsync")
const AppResponse = require("../utils/appResponse")
const AppError = require("../utils/appError")

const { createExample, getAllExamples, updateExample, getExampleById, deleteExample
} = require("../actions/exampleActions")

//getting all examples
exports.getAllExamples = catchAsync(async (req, res) => {
    const data = await getAllExamples()
    return new AppResponse(res, data)
})

//getting a certain example by its ID
exports.getExampleById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if(!id) return next(new AppError("Missing or invalid info provided", 400))
    const data = await getExampleById(id)
    return new AppResponse(res, {example: data})
})

//creating an example
exports.createExample = catchAsync(async (req, res, next) => {
    const { column1, column2 } = req.body
    if(!column1 || !column2) return next(new AppError("Missing or invalid info provided", 400))
    const response = await createExample(column1, column2)
    return new AppResponse(res, response)
})

// updating existing example
exports.updateExample = catchAsync(async (req, res, next) => {
    const { id, column1, column2 } = req.body
    if(!id || !column1 || !column2) return next(new AppError("Missing or invalid info provided", 400))
    const response = await updateExample(id, column1, column2)
    return new AppResponse(res, response)
})

//deleting an example
exports.deleteExample = catchAsync(async (req, res, next) => {
    const { id } = req.params
    if(!id) return next(new AppError("Missing or invalid info provided", 400))
    const response = await deleteExample(id)
    return new AppResponse(res, response)
})