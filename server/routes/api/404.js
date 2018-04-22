module.exports = (req, res, next) => {
  res.status(404);
  res.json({
    error: "This page api not support!"
  });
};
