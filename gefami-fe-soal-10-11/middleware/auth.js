const authenticate = function (req, res, next) {
  const token = req.headers;
  if (token.userid === "ifabula" && token.scope === "user") {
    next();
  } else {
    return res.json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  }
};

module.exports = { authenticate };
