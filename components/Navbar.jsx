import { DiJqueryLogo } from "react-icons/di";
import { BsFillTelephoneInboundFill, BsFillCartDashFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex justify-between px-12  text-white items-center sticky top-0 h-20 z-50">
      {/* logo */}
      <h1 className="flex text-3xl items-center">
        Daily <DiJqueryLogo className="text-blue-300" /> Meal
      </h1>

      {/* links */}
      <ul className="flex gap-4 items-center text-lg">
        <li className="flex items-center relative text-blue-300">
          <DiJqueryLogo className="absolute -top-2 -left-2 " /> Home
        </li>
        <li>About Us</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      {/* cart and phone */}
      <div className="flex gap-8 items-center text-xl">
        <div className="flex gap-1 items-center">
          <BsFillTelephoneInboundFill className="text-2xl text-yellow-500" />
          <p>+1 876 124 243</p>
        </div>
        <div className="relative">
          <BsFillCartDashFill className="text-2xl" />{" "}
          <p className="absolute -top-4 -right-2 text-lg text-yellow-300">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
