const express = require("express");
// const usersController = require()

const router = express.Router();

router.route("/").get(usersController.getAllUsers);
router.route("/:id").get(usersController.getUser);
