module.exports = (app) => {
  app.use("/app-events", (req, res) => {
    const { payload } = req.body;

    return res.status(200).json(payload);
  });
};
