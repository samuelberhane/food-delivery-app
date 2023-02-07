import { foodData } from "../foodData";
import { CartItems } from "./";
import { useSelector } from "react-redux";
import { showCart, selectCartItems } from "../redux/slice/cartSlice";

const Cart = () => {
  const isShowCart = useSelector(showCart);
  const cartItems = useSelector(selectCartItems);
  let subTotal = 0;
  let totalDistance = 0;

  cartItems?.map((item) => {
    subTotal += parseFloat(item.price);
    totalDistance += item.distance;
  });

  const deliveryFee =
    parseInt((totalDistance / cartItems?.length) * 6) + cartItems?.length * 1.5;

  return (
    <div
      className={`${
        isShowCart ? "showCart" : "hideCart"
      } fixed bg-black text-white px-2 overflow-y-scroll pb-10 py-2`}
    >
      <h1 className="text-3xl font-bold mb-2">
        My <span className="text-yellow-700">Orders</span>{" "}
      </h1>
      {cartItems?.length === 0 ? (
        <h1 className="font-bold text-xl">Your Cart Is Empty.</h1>
      ) : (
        <>
          <div>
            {cartItems.map((item, index) => (
              <CartItems key={index} item={item} />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <h1>Sub-Total</h1>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1>Delivery Fee</h1>
            <p>${deliveryFee}</p>
          </div>
          <div className="flex justify-between items-center">
            <h1>Total</h1>
            <p>${subTotal + deliveryFee}</p>
          </div>
          <button className="bg-blue-600 px-12 mt-2 py-2 rounded-md w-full">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
