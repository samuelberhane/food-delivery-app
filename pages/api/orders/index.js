import dbConnect from "../../../server/dbConnect";
import Order from "../../../server/models/orderModel";
const Stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  switch (method) {
    // get all orders
    case "GET":
      console.log(req.body);
      try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    // create new order
    case "POST":
      const { id, customer, address, total, method } = req.body;
      try {
        if (id) {
          await Stripe.charges.create({
            source: id,
            amount: total * 100,
            currency: "usd",
          });
        }
        const order = await Order.create({ customer, address, total, method });
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      break;
  }
}
