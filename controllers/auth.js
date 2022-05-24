const express = require("express");
const register = require("./register");
const login = require("./login");
const logout = require("./lougout");
const router = express.Router();

router.post("/register", register);

module.exports = router;
