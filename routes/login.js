const express = require("express");
const router = express.Router();

const { login, loginPage } = require("../controller/login");

router.route("/").get(loginPage).post(login);

module.exports = router;
