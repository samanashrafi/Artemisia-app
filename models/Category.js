const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = Schema({
  title: {
    type: String,
    required: true
  },
  titleEn: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Category = mongoose.model("categories", CategorySchema);
