import dbConnect from "../../../server/dbConnect";
import Item from "../../../server/models/itemModel";
export default async function handler(req, res) {
  dbConnect();
  const { method } = req;
  switch (method) {
    // get all food items
    case "GET":
      try {
        const items = await Item.find({});
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    // create food item
    case "POST":
      try {
        const item = await Item.create({ ...req.body });
        res.status(200).json(item);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      break;
  }
}
