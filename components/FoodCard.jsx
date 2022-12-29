import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";

const FoodCard = ({ item }) => {
  const { restaurant, distance, rate, name, image } = item;
  return (
    <div className="mb-4 shadow-md relative">
      <div>
        <Image
          src={image}
          alt="food-img"
          width={200}
          height={200}
          className="foodItem rounded-md"
        />
        <BsFillCartPlusFill className="absolute top-2 left-2 bg-blue-600 text-white p-2 text-4xl rounded-full hover:bg-green-500 cursor-pointer" />
      </div>

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
          <MdDeliveryDining /> Delivery 8%
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
