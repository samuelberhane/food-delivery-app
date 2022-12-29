import { foodData } from "../foodData";
import { FoodCard } from "./";

const Popular = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-8">
        Most <span className="text-yellow-700">Popular</span>{" "}
      </h1>
      <div className="flex items-center justify-between mt-4 flex-wrap">
        {foodData.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
