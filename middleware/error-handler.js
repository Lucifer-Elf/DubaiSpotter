import { StatusCodes } from "http-status-codes";
const errorhandlerMiddleware = (error, req, res, next) => {
  console.log("asdasd", error.message);
  const defaultError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message || "Something Wrong Try again later",
  };
  if (error.name === "ValidationError") {
    (defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.msg = Object.values(error.errors)
        .map((item) => item.message)
        .join(","));
  }
  if (error.code && error.code === 11000) {
    (defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.msg = `${Object.keys(
        error.keyValue
      )} field has to be unique`);
  }

  //res.status(defaultError.statusCode).json({msg:error})
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};
export default errorhandlerMiddleware;
