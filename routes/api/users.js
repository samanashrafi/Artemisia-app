const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users works2" }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email =
        "ایمیل مورد نظر قبلا ثبت شده است لطفا ایمیل دیگری را انتخاب فرمایید.";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        avatar: req.body.avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err)
            return res.status(400).json({
              errosMsg: "سیستم با خطا مواجه شده است لطفا بعدا امتحان فرمایید."
            });
          newUser.password = hash;
          newUser
            .save()
            .then(user =>
              res
                .status(200)
                .json({ msg: "کاربر گرامی ثبت نام شما با موفقیت انجام شد." })
            )
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
