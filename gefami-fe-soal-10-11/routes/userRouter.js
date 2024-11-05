const express = require("express");
const router = express.Router();
const Controller = require("../controller/userController");
const { authenticate } = require("../middleware/auth");

router.get("/user", authenticate, Controller.getUser);

router.post("/user", authenticate, Controller.postUser);

module.exports = router;
