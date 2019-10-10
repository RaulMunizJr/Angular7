var middleware = {
    requireAuth: function(req, res, next) {
      console.log("private route hit");
      next();
    },
    logger: function(req, res, next) {
      console.log(
        "request " +
          new Date().toString() +
          " " +
          req.method +
          " " +
          req.originalUrl
      );
      next();
    }
  };
  //app.use(middleware.requireAuth)
  module.exports = middleware;
  