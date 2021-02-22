const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryMethodSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },

  explanation: {
    type: String,

    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = DeliveryMethod = mongoose.model(
  "deliverymethod",
  DeliveryMethodSchema
);
