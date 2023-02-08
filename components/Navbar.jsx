import { DiJqueryLogo } from "react-icons/di";
import { BsFillTelephoneInboundFill, BsFillCartDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  HANDLE_CART,
  selectCartItems,
  selectCurrentOrder,
  STORAGE_VALUE,
} from "../redux/slice/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentOrder = useSelector(selectCurrentOrder);

  //get saved cartItems and currentOrder from local storage
  useEffect(() => {
    dispatch(
      STORAGE_VALUE({
        cartItems: JSON.parse(localStorage.getItem("deliveryCartItems")) || [],
        currentOrder: JSON.parse(localStorage.getItem("deliveryCurrentOrder")),
      })
    );
  }, []);

  return (
    <div className="bg-gray-800 flex justify-between px-2 md:px-6 lg:px-10 text-white items-center sticky top-0 h-20 z-50">
      {/* logo */}
      <Link
        href="/"
        className="md:text-2xl lg:text-3xl items-center hidden md:flex"
      >
        Daily <DiJqueryLogo className="text-blue-300" /> Meal
      </Link>

      {/* links */}
      <ul className="flex gap-[0.35rem] md:gap-2 lg:gap-4 items-center text-sm md:text-[16px] lg:text-lg">
        <li className="flex items-center relative text-blue-300">
          <Link href="/">
            <DiJqueryLogo className="absolute -top-2 -left-2 " /> Home
          </Link>
        </li>
        <li>
          <Link href="#reviews">Reviews</Link>
        </li>
        <li>
          <Link href="#about" className="whitespace-nowrap">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#join" className="whitespace-nowrap">
            Join Us
          </Link>
        </li>
        <li>
          <Link href="#contact" className="whitespace-nowrap">
            Contacts
          </Link>
        </li>
      </ul>

      {/* order, cart and phone */}
      <div className="flex gap-2 md:gap-6 lg:gap-8 items-center text-sm md:text-[16px] lg:text-lg ">
        <Link href={currentOrder ? `/order/${currentOrder}` : "/"}>Orders</Link>
        <div className="gap-1 items-center hidden md:flex">
          <BsFillTelephoneInboundFill className="text-2xl text-yellow-500" />
          <p>+1 876 124 243</p>
        </div>
        <div className="relative mr-2 md:mr-0">
          <BsFillCartDashFill
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(HANDLE_CART())}
          />{" "}
          <p className="absolute -top-3 -right-3 text-sm bg-yellow-500 rounded-full py-[0.08rem] px-2">
            {cartItems?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
