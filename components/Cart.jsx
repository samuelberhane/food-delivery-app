import { foodData } from "../foodData";
import { CartItems } from "./";
import { useSelector } from "react-redux";
import { showCart } from "../redux/slice/cartSlice";

const Cart = () => {
  const isShowCart = useSelector(showCart);

  return (
    <div
      className={`${
        isShowCart ? "showCart" : "hideCart"
      } fixed bg-black text-white px-2 overflow-y-scroll pb-10 py-2`}
    >
      <h1 className="text-3xl font-bold mb-2">
        My <span className="text-yellow-700">Orders</span>{" "}
      </h1>
      <div>
        {foodData.slice(0, 4).map((item, index) => (
          <CartItems key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <h1>Sub-Total</h1>
        <p>$125</p>
      </div>
      <div className="flex justify-between items-center">
        <h1>Delivery Fee (8%)</h1>
        <p>$12</p>
      </div>
      <div className="flex justify-between items-center">
        <h1>Total</h1>
        <p>$137</p>
      </div>
      <button className="bg-blue-600 px-12 mt-2 py-2 rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
