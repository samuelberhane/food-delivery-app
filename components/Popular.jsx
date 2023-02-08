import { FoodCard } from "./";

const Popular = ({ foodList }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Most <span className="text-yellow-700">Popular</span>{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-2 mt-3">
        {foodList.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
