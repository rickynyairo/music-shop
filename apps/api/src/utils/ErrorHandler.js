import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

export const notFoundError = () => {
  throw new HTTP404Error("Method not found.");
};

export const clientError = (err, res, next) => {
  if (err instanceof HTTPClientError) {
    // console.warn(err);
    // add logging service
    res.status(err.statusCode).send(err.message);
  } else {
    next(err);
  }
};

export const serverError = (err, res, _next) => {
  // console.error(err);
  // add error logging service
  return res.status(500).send(err.stack);
};
