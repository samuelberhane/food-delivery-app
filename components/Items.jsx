import Image from "next/image";
import { useState } from "react";

const Items = ({ handleDelete, allItems }) => {
  const [index, setIndex] = useState(6);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Food <span className="text-yellow-600">Items</span>
      </h1>
      <div className="bg-white">
        <div className="grid grid-cols-8 gap-4 bg-[#ecefd2] px-2 py-1">
          <p>Id</p>
          <p>Name</p>
          <p>Image</p>
          <p>Price</p>
          <p>Categories</p>
          <p>Restaurant</p>
          <p>Distance</p>
          <p>Rate</p>
        </div>
        {allItems?.slice(0, index)?.map((item, index) => (
          <div
            className="px-2 py-1 mb-2 border-2 border-yellow-100 text-sm"
            key={index}
          >
            <div className="grid grid-cols-8 gap-4 pb-1">
              <p>{item?._id.slice(0, 5)}...</p>
              <p>{item?.name}</p>
              <div className="relative h-10 w-14">
                <Image src={item?.image} alt="itemImage" layout="fill" />
              </div>
              <p>${item?.price}</p>
              <div>
                {item?.category?.map((cat, index) => (
                  <p key={index}>{cat}</p>
                ))}
              </div>
              <p>{item?.restaurant}</p>
              <p>{item?.distance}</p>
              <p>{item?.rate}</p>
            </div>
            <div className="border-t-2 flex justify-end items-center gap-4 py-1">
              <button className="py-1 px-5 rounded bg-blue-500 text-white">
                Edit
              </button>
              <button
                className="py-1 px-5 rounded bg-red-500 text-white"
                onClick={() => handleDelete(item?._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {allItems.length > 6 && index < allItems.length && (
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          onClick={() => setIndex((prev) => prev + 2)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Items;
