import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "../redux/slice/cartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { price, image, name, _id, amount } = item;
  return (
    <div className="flex gap-3 bg-gray-800 mb-2 px-2 rounded-sm hover:bg-gray-600">
      <div className="cartFoodContainer mt-1">
        <Image
          src={image}
          alt="foodImg"
          height="20"
          width="40"
          className="cartFood"
        />
      </div>
      <div className="w-full">
        <p>{name}</p>
        <p>{price}$</p>
        <div className="flex items-center justify-between w-full mt-2 mb-1">
          <div className="flex items-center">
            <p
              className="bg-blue-500 px-2 rounded-sm cursor-pointer"
              onClick={() => dispatch(DECREASE_ITEM(_id))}
            >
              -
            </p>
            <p className="mx-2">{amount}</p>
            <p
              className="bg-blue-500 px-2 rounded-sm cursor-pointer"
              onClick={() => dispatch(INCREASE_ITEM(_id))}
            >
              +
            </p>
          </div>
          <p className="font-bold ">{price}$</p>
          <button
            className="text-red-300"
            onClick={() => dispatch(REMOVE_ITEM(_id))}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
