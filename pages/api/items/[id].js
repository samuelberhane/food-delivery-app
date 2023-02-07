import dbConnect from "../../../server/dbConnect";
import Item from "../../../server/models/itemModel";

export default async function handler(req, res) {
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    // delete item
    case "DELETE":
      try {
        await Item.findByIdAndDelete(id);
        res.status(200).json("Item Deleted.");
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      break;
  }
}
