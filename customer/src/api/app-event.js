const CustomerService = require("../services/customer-service");

module.exports = (app) => {
  const service = new CustomerService();

  app.use("/app-events", (req, res) => {
    const { payload } = req.body;
    service.SubscribeEvents(payload);

    return res.status(200).json(payload);
  });
};
