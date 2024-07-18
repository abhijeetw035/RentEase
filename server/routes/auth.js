const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/User");

const { registerHandler, loginHandler } = require("../controllers/auth");

const router = express.Router();

// MULTER Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("profileImage"), registerHandler);
router.post("/login", loginHandler);

module.exports = router;
