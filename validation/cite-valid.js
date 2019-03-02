const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCite(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.titleEn = !isEmpty(data.titleEn) ? data.titleEn : "";
  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = "اسم شهر باید بین حداقل 2 حداکثر 30 حروف باشد.";
  }
  if (!Validator.isLength(data.titleEn, { min: 2, max: 30 })) {
    errors.titleEn = "اسم انگلیسی شهر باید بین حداقل 2 حداکثر 30 حروف باشد.";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = "اسم شهر الزامی می باشد";
  }

  if (Validator.isEmpty(data.titleEn)) {
    errors.titleEn = "اسم انگلیسی شهر الزامی می باشد";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
