const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  product_id: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  recommend: {
    type: Number,
    required: true,
  },
  reported: {
    type: Number,
    required: true,
  },
  reviewer_name: {
    type: String,
    required: true,
  },
  reviewer_email: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  helpfulness: {
    type: String,
    required: true,
  },
  //   photos: {
  //     type: Array,
  //     required: true,
  //   },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;