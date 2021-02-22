const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  code: {
    type: String,

    required: true,
  },
  imgpath: {
    type: String,

    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  compatible: {
    type: Array,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
