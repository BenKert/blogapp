const express = require("express");
// const logController = require()

const router = express.Router();

router.route("/").get(logController.getAllLogs);
router.route("/:id").get(logController.getLog);
