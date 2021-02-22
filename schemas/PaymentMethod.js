const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentMethodSchema = new Schema({
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
});

module.exports = PaymentMethod = mongoose.model(
  "paymentmethod",
  PaymentMethodSchema
);
