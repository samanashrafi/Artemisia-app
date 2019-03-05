const express = require("express");
const router = express.Router();

const validateCategory = require("../../validation/category-valid");
const Category = require("../../models/Category");

router.get("/test", (req, res) => res.json({ msg: "Categories works" }));

router.post("/create", (req, res) => {
  Category.findOne({ title: req.body.title }).then(category => {
    const { errors, isValid } = validateCategory(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    if (category) {
      errors.title = "عنوان این دسته بندی قبلا ثبت شده است!!!";
      return res.status(400).json(errors);
    } else {
      const newCategory = new Category({
        title: req.body.title,
        titleEn: req.body.titleEn
      });

      newCategory
        .save()
        .then(res => {
          res.status(200).json({ msg: "دسته بندی مورد نظر با موفقیت ثبت شد." });
        })
        .catch(err =>
          err.status(400).json({
            errosMsg: "سیستم با خطا مواجه شده است لطفا بعدا امتحان فرمایید."
          })
        );
    }
  });
});

router.get("/all", (req, res) => {
  Category.find()
    .populate("category", ["title", "titleEn"])
    .then(category => {
      if (!category) {
        return res.status(404).json({ msg: "هیچ دستبندی وجود ندارد!!!" });
      }
      res.json(category);
    })
    .catch(err => {
      return err.status(404).json({ errosMsg: "هیچ دستبندی وجود ندارد!!!" });
    });
});

router.delete("/delete", (req, res) => {
  Category.findByIdAndDelete();
});
module.exports = router;
