import Image from "next/image";

const CartItems = ({ item }) => {
  const { price, image, name } = item;
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
            <p className="bg-blue-500 px-2 rounded-sm">-</p>
            <p className="mx-2">1</p>
            <p className="bg-blue-500 px-2 rounded-sm">+</p>
          </div>
          <p className="font-bold ">{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;