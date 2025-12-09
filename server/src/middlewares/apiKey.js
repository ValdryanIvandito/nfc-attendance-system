export default function apiKey(req, res, next) {
  const clientKey = req.headers["x-api-key"];

  if (!clientKey) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized",
    });
  }

  if (clientKey !== process.env.API_KEY) {
    return res.status(403).json({
      status: false,
      message: "Access denied",
    });
  }

  next();
}

// import { UnauthorizedError, ForbiddenError } from "../utils/errors.js";

// export default function apiKey(req, res, next) {
//   const clientKey = req.headers["x-api-key"];

//   // No API Key
//   if (!clientKey) {
//     throw new UnauthorizedError("Unauthorized - API Key missing");
//   }

//   // Wrong API Key
//   if (clientKey !== process.env.API_KEY) {
//     throw new ForbiddenError("Access denied - Invalid API Key");
//   }

//   next();
// }
