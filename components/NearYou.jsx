import { useState } from "react";
import { FoodCard } from "./";

const NearYou = ({ foodList }) => {
  const [index, setIndex] = useState(6);
  const nearPlace = foodList?.filter((food) => +food.distance < 2);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Near <span className="text-yellow-700">You</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-3 gap-2 lg:gap-4">
        {nearPlace?.slice(0, index)?.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </div>
      {nearPlace.length > 6 && index < nearPlace.length && (
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

export default NearYou;
