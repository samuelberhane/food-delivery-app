import Image from "next/legacy/image";
import { AiFillStar } from "react-icons/ai";
import { GiPathDistance } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../redux/slice/cartSlice";

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();
  const [itemAdded, setItemAdded] = useState(false);
  const { restaurant, distance, rate, name, image, price } = item;
  return (
    <div className="flex justify-center">
      <div className="mb-4 shadow-md relative w-[220px] hover:shadow-lg hover:bg-yellow-50 rounded-tl-md rounded-tr-md">
        <div className="relative h-[200px] w-full rounded-tl-md rounded-tr-md">
          <Image
            src={image}
            alt="foodImg"
            layout="fill"
            className="rounded-tl-md rounded-tr-md "
          />
          <button
            onClick={() => {
              setItemAdded(true);
              dispatch(ADD_ITEM(item));
            }}
            disabled={itemAdded}
          >
            <BsFillCartPlusFill className="absolute top-2 left-2 bg-blue-600 text-white p-2 text-4xl rounded-full hover:bg-green-500 cursor-pointer" />
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <p>{name}</p>
          <p>{price}$</p>
        </div>

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
            <MdDeliveryDining /> Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
