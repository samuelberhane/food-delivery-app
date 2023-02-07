import dbConnect from "../../../server/dbConnect";
import Order from "../../../server/models/orderModel";

export default async function handler(req, res) {
  dbConnect();
  const { method } = req;

  switch (method) {
    // get all orders
    case "GET":
      try {
        const orders = await Order.find({});
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    // create new order
    case "POST":
      try {
        const order = await Order.create({ ...req.body });
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      break;
  }
}
