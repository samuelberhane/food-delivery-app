// const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

// export default async (req, res) => {
//   const { cartItems, deliveryFee, totalAmount, subTotal } = req.body;

//   const transformedItems = cartItems.map((item) => ({
//     quantity: item.amount,
//     price_data: {
//       currency: "usd",
//       unit_amount: parseFloat(item.price) * 100,
//       product_data: {
//         name: item.name,
//         description: item.restaurant,
//         images: [item.image],
//       },
//     },
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: "fixed_amount",
//           fixed_amount: { amount: deliveryFee * 100, currency: "usd" },
//           display_name: "Delivery Fee",
//         },
//       },
//     ],
//     shipping_address_collection: {
//       allowed_countries: ["ET"],
//     },
//     line_items: transformedItems,
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_HOST}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_HOST}`,
//   });
//   res.status(200).json({ id: session.id });
// };
