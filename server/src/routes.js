const { get } = require("./controllers/test.controller");

const router = (app) => {
  app.route("/test")
    .get(get);
};

module.exports = {
    router
};
