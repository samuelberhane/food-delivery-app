import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const FoodCard = ({ item }) => {
  const { restaurant, distance, rate, name, image } = item;
  return (
    <div className="mb-4 shadow-md">
      <Image
        src={image}
        alt="food-img"
        width={200}
        height={200}
        className="foodItem rounded-md"
      />
      <p>{name}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold">{restaurant} </p>
        <div className="flex gap-1 items-center">
          <AiFillStar className="text-yellow-400" /> <p> {rate}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-sm mb-2">
          <GiPathDistance /> {distance}km
        </p>
        <p className="flex items-center gap-1 text-sm mb-2">
          {" "}
          <MdDeliveryDining /> Free Delivery
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
