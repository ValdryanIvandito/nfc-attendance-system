import logger from "../utils/logger.js";

export default function errorHandler(err, req, res, next) {
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    body: req.body,
  });

  return res.status(500).json({
    status: false,
    message: "Internal server error",
  });
}
