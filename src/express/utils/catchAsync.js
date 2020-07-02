
/*
    - for catching errors in async functions (and controllers)
    - last argument in the func must be the "next" callback function
    - errors will be passed to the "next" callback which will then send it to the global error handler
*/
module.exports = fn => {
    return (...args) => {
        const next = args[args.length - 1]
        fn(...args).catch(next)
    }
}