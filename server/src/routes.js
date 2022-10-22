const { signUp } = require("./controllers/auth.controller");

const router = (app) => {
  app.post('/auth', signUp);
};

module.exports = {
    router
};
