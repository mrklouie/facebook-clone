const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");
const errorHandler = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong please try again",
  };

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res
    .status(customError.statusCode)
    .json({ status: "error", message: customError.message });
};

module.exports = errorHandler;
