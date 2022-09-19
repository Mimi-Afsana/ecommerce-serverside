const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product desc"],
  },
  name: {
    type: Number,
    required: [true, "Please Enter Product price"],
    maxLength: [8, "8 is enough for price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter categpry"],
  },
  stock: {
    type: Number,
    required: [true, "please enter categpry"],
    maxLength: [4, "stock can not exceed 4 character"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      name: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
