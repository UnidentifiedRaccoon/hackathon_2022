const router = (app) => {
  app.route("/")
    .get((req, res) => {
      res.send("Hello world");
    })
};

module.exports = {
    router
};
