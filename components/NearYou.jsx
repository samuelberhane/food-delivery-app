import { FoodCard } from "./";

const NearYou = ({ foodList }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Near <span className="text-yellow-700">You</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mt-3 gap-2 lg:gap-4">
        {foodList?.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NearYou;
