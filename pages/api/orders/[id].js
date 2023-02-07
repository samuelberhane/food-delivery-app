import dbConnect from "../../../server/dbConnect";
import Order from "../../../server/models/orderModel";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    // get single order
    case "GET":
      try {
        const order = await Order.findById(id);
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      break;
  }
}
