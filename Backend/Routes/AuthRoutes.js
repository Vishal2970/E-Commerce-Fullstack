const JWT = require("jsonwebtoken");
const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();
const auth_Controller = require("../Controller/AuthController");

// router.route("/").get(authMiddleware,auth_Controller.home);
router.route("/login").post(auth_Controller.login);
router.route("/signup").post(auth_Controller.signup);
router.route("/user_auth").get(authMiddleware, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;