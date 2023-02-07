import { DiJqueryLogo } from "react-icons/di";
import { BsFillTelephoneInboundFill, BsFillCartDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { HANDLE_CART, selectCartItems } from "../redux/slice/cartSlice";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="bg-gray-800 flex justify-between px-12  text-white items-center sticky top-0 h-20 z-50">
      {/* logo */}
      <h1 className="flex text-3xl items-center">
        Daily <DiJqueryLogo className="text-blue-300" /> Meal
      </h1>

      {/* links */}
      <ul className="flex gap-4 items-center text-lg">
        <li className="flex items-center relative text-blue-300">
          <Link href="/">
            <DiJqueryLogo className="absolute -top-2 -left-2 " /> Home
          </Link>
        </li>
        <li>
          {" "}
          <Link href="#reviews">Reviews</Link>{" "}
        </li>
        <li>
          <Link href="#about">About Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="#join">Join Us</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="#contact">Contacts</Link>{" "}
        </li>
      </ul>

      {/* order, cart and phone */}
      <div className="flex gap-8 items-center text-xl">
        <Link href="/order/:id">Orders</Link>
        <div className="flex gap-1 items-center">
          <BsFillTelephoneInboundFill className="text-2xl text-yellow-500" />
          <p>+1 876 124 243</p>
        </div>
        <div className="relative">
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
