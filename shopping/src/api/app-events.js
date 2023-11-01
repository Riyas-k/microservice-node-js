const ShoppingService = require("../services/shopping-service");

module.exports = (app) => {
  const service = new ShoppingService();

  app.use("/app-events", (req, res) => {
    const { payload } = req.body;
    service.SubscribeEvents(payload);

    return res.status(200).json(payload);
  });
};
