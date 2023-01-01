import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
