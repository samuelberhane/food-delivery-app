import { foodData } from "../foodData";
import { CartItems } from "./";

const Cart = () => {
  return (
    <div className="fixed top-20 right-0 bg-black text-white bottom-0 px-2 overflow-y-scroll pb-10 py-2">
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
