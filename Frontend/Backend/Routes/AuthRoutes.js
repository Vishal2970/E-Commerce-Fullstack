const JWT = require("jsonwebtoken");
const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();
const auth_Controller = require("../Controller/AuthController");
const multer = require('multer');

// router.route("/").get(authMiddleware,auth_Controller.home);
router.route("/login").post(auth_Controller.login);


//router.route("/signup").post(auth_Controller.signup);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG files are allowed'), false);
    }
  },
});

router.route("/signup").post(upload.single('image'), auth_Controller.signup);




router.route("/user_auth").get(authMiddleware, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;