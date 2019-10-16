import * as ErrorHandler from "../utils/ErrorHandler";

const handle404Error = router => {
  router.use((_req, _res) => {
    ErrorHandler.notFoundError();
  });
};

const handleClientError = router => {
  router.use((err, _req, res, next) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerError = router => {
  router.use((err, _req, res, next) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
