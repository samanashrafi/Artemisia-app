const express = require("express");
const router = express.Router();

// const Cites = require("../../models/City");

router.get("/test", (req, res) => res.json({ msg: "Cites works" }));

module.exports = router;
