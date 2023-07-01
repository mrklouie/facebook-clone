const BadRequest = require("../errors/badRequest");
const { StatusCodes } = require("http-status-codes");
const path = require("path");

const home = (req, res) => {
  res
    .status(StatusCodes.OK)
    .sendFile(path.join(__dirname, "../views/home.html"));
};

module.exports = home;
