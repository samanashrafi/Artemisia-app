const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = Schema({
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

module.exports = City = mongoose.model("cites", CitySchema);
