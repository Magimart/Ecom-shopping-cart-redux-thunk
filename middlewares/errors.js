import ErrorHandler from "../utils/helpers/errorHandlers";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = { ...err }
  console.log(err.message)
    error.message = err.message

    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    // Handling mongoose filed Validation error
    if (err.name === 'ValidationError') {
        console.log(err)
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })

}