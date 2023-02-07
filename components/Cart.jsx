import { foodData } from "../foodData";
import { CartItems } from "./";
import { useSelector } from "react-redux";
import { showCart, selectCartItems } from "../redux/slice/cartSlice";
import { useEffect, useState } from "react";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const isShowCart = useSelector(showCart);
  const cartItems = useSelector(selectCartItems);
  let subTotal = 0;
  let totalDistance = 0;

  // get sub total price of cart items
  cartItems?.map((item) => {
    subTotal += parseFloat(item.price * item.amount);
    totalDistance += item.distance + item.amount / 2;
  });

  // calculate delivery fee
  const deliveryFee =
    parseInt((totalDistance / cartItems?.length) * 4) + cartItems?.length * 1.5;

  // currency and total amount for payment
  const totalAmount = subTotal + deliveryFee;
  const currency = "USD";

  // Custom component to wrap the PayPalButtons and handle currency changes
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
          forceReRender={[amount, currency]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
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
                method: 1,
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
              <div>
                <button
                  onClick={() => setCash(true)}
                  className="bg-blue-600 px-12 py-2 rounded-md w-full mb-3 mt-4"
                >
                  CASH ON DELIVERY
                </button>

                <button
                  onClick={() => setCash(true)}
                  className="bg-green-600 px-12 py-2 rounded-md w-full mb-3"
                >
                  PAY WITH STRIPE
                </button>
                <PayPalScriptProvider
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
