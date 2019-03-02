const express = require("express");
const router = express.Router();

const validateCity = require("../../validation/cite-valid");
const City = require("../../models/City");

router.get("/test", (req, res) => res.json({ msg: "Cites works" }));

router.post("/create", (req, res) => {
  City.findOne({ title: req.body.title }).then(city => {
    const { errors, isValid } = validateCity(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    if (city) {
      errors.title = "این شهر قبلا ثبت شده است";
      return res.status(400).json(errors);
    } else {
      const newCity = new City({
        title: req.body.title,
        titleEn: req.body.titleEn
      });

      newCity
        .save()
        .then(() => {
          res.status(200).json({ msg: "شهر با موفقیت ثبت شد." });
        })
        .catch(err =>
          res.status(400).json({
            errosMsg: "سیستم با خطا مواجه شده است لطفا بعدا امتحان فرمایید."
          })
        );
    }
  });
});

router.get("/all", (req, res) => {
  City.find()
    .populate("city", ["title", "titleEn"])
    .then(cites => {
      if (!cites) {
        return res.status(400).json({ msg: "هیچ شهری وجود ندارد." });
      }
      res.json(cites);
    })
    .catch(err => res.status(404).json({ msg: "هیچ شهری وجود ندارد." }));
});

module.exports = router;
