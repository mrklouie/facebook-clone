const BadRequest = require("../errors/badRequest");
const { StatusCodes } = require("http-status-codes");
const path = require("path");

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please fill out all required fields");
  }
  res.status(StatusCodes.OK).json(req.body);
};

const loginPage = (req, res) => {
  res
    .status(StatusCodes.OK)
    .sendFile(path.join(__dirname, "../views/login.html"));
};

module.exports = { login, loginPage };
