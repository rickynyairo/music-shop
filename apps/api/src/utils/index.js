export const applyRoutes = (routes, router) => {
  for (const route of routes) {
    const { method, path, controller } = route;
    router[method](path, controller);
  }
};

export const applyMiddleware = (middleware, router) => {
  for (const func of middleware) {
    func(router);
  }
};
