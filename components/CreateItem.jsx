import axios from "axios";
import { useState } from "react";

const CreateItem = ({ setAllItems }) => {
  const [imageFile, setImageFile] = useState(null);
  const [inputData, setInputData] = useState({
    restaurant: "",
    distance: "",
    rate: "",
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "images");
    try {
      const uploadResponse = await axios.post(
        process.env.NEXT_PUBLIC_CLOUDINARY_URI,
        data
      );
      const item = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/items`,
        {
          ...inputData,
          image: uploadResponse?.data?.url,
        }
      );
      setAllItems((prev) => [item?.data, ...prev]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setImageFile(null);
    setInputData({
      restaurant: "",
      distance: "",
      rate: "",
      name: "",
      price: "",
    });
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-2">
        Create <span className="text-yellow-600">Item</span>
      </h1>
      <form className="px-4" onSubmit={handleCreate}>
        <input
          required
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          value={inputData.name}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="text"
          placeholder="Restaurant"
          name="restaurant"
          value={inputData.restaurant}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="number"
          placeholder="Price"
          name="price"
          value={inputData.price}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="number"
          placeholder="Rate"
          name="rate"
          value={inputData.rate}
          onChange={handleChange}
        />
        <input
          required
          className="input"
          type="number"
          placeholder="Distance"
          name="distance"
          value={inputData.distance}
          onChange={handleChange}
        />
        <input
          required
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button
          type="submit"
          className="block px-4 py-2 bg-blue-500 hover:bg-blue-700 w-[300px] mt-4 mb-6 text-white rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
