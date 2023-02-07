import { useState } from "react";

const CreateItem = () => {
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

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("imageFile", imageFile);
    console.log("inputData", inputData);
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
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          value={inputData.name}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Restaurant"
          name="restaurant"
          value={inputData.restaurant}
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          placeholder="Price"
          name="price"
          value={inputData.price}
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          placeholder="Rate"
          name="rate"
          value={inputData.rate}
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          placeholder="Distance"
          name="distance"
          value={inputData.distance}
          onChange={handleChange}
        />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
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
