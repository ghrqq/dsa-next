const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  currency: {
    type: String,
    default: "UAH",
  },
  total: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,

    required: true,
  },
  delivery: {
    type: String,

    required: true,
  },
  approved: {
    type: Boolean,
    defaul: false,
  },
  deliveryInfo: {
    type: String,
    required: true,
  },
  billingInfo: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  items: [ItemsSchema],
});

module.exports = Order = mongoose.model("order", OrderSchema);
