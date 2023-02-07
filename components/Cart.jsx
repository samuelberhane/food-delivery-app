import { CartItems } from "./";
import { useSelector, useDispatch } from "react-redux";
import { showCart, selectCartItems } from "../redux/slice/cartSlice";
import { useEffect, useState } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { REMOVE_ITEMS } from "../redux/slice/cartSlice";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const isShowCart = useSelector(showCart);
  const cartItems = useSelector(selectCartItems);
  let subTotal = 0;
  let totalDistance = 0;

  // create new order
  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/orders`,
        data
      );

      if (res.status === 200) {
        router.push(`/order/${res.data._id}`);
        dispatch(REMOVE_ITEMS());
      }
    } catch (err) {
      console.log(err);
    }
  };

  // get sub total price of cart items
  cartItems?.map((item) => {
    subTotal += parseFloat(item.price * item.amount);
    totalDistance += item.distance + item.amount / 2;
  });

  // calculate delivery fee
  const deliveryFee =
    parseInt((totalDistance / cartItems?.length) * 4) + cartItems?.length * 1.5;

  const totalAmount = deliveryFee + subTotal;
  const currency = "USD";

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          disabled={false}
          forceReRender={[totalAmount, currency]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: totalAmount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: totalAmount,
                method: 2,
              });
            });
          }}
        />
      </>
    );
  };

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

          <div>
            {open ? (
              <div className="w-[300px] flex flex-col gap-3 mt-4">
                <button
                  onClick={() => setCash(true)}
                  className="bg-blue-600 px-12 py-2 rounded-md w-full"
                >
                  CASH ON DELIVERY
                </button>

                <button
                  onClick={() => setCash(true)}
                  className="bg-green-600 px-12 py-2 rounded-md w-full"
                >
                  PAY WITH STRIPE
                </button>
                <PayPalScriptProvider
                  className="bg-red-500"
                  options={{
                    "client-id": process.env.NEXT_PUBLIC_PAYPAL_ID,
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 px-12 mt-2 py-2 rounded-md w-full"
              >
                Checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
