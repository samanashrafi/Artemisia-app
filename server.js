const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

// route api
const users = require("./routes/api/users");

// body parser mildde ware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys.js").mongoURL;

// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongooDB Connected"))
  .catch(err => console.log(err));

// Password Middleware
app.use(passport.initialize());

// Password Config
require("./config/passport")(passport);
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port " + port));
