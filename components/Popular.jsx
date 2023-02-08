import { useState } from "react";
import { FoodCard } from "./";

const Popular = ({ foodList }) => {
  const [index, setIndex] = useState(6);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Most <span className="text-yellow-700">Popular</span>{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-2 mt-3">
        {foodList?.slice(0, index)?.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </div>
      {foodList.length > 6 && index < foodList.length && (
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

export default Popular;
