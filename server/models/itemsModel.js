import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
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
    category: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.Item || mongoose.model("Item", ItemSchema);
