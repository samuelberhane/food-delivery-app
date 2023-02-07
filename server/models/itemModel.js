import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema(
  {
    restaurant: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Item || mongoose.model("Item", ItemSchema);
