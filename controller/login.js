const BadRequest = require("../errors/badRequest");
const { StatusCodes } = require("http-status-codes");
const UserModel = require("../models/Users");
const path = require("path");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Please fill out all required fields");
  }

  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ status: "ok", ...req.body });
};

const loginPage = (req, res) => {
  res
    .status(StatusCodes.OK)
    .sendFile(path.join(__dirname, "../views/login.html"));
};

module.exports = { login, loginPage };
