const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "Users works2" }));

module.exports = router;
