const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,

    required: true,
  },
  country: {
    type: String,

    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
});

module.exports = Address = mongoose.model("address", AddressSchema);
