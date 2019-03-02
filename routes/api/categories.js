const express = require("express");
const router = express.Router();

const Category = require("../../models/Category");

router.get("/test", (req, res) => res.json({ msg: "Categories works" }));

module.exports = router;
