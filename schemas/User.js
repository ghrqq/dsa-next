const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: 0,
  },
  lang: {
    type: String,

    default: "en",
  },
  currency: {
    type: String,

    default: "UAH",
  },
  sale: {
    type: Number,
    default: 0.08,
  },
  agent: {
    type: String,
    default: 1,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
