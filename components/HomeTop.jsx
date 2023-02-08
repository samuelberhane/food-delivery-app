import Image from "next/legacy/image";
import { FiClock } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const HomeTop = () => {
  return (
    <div className="home grid lg:grid-cols-2 gap-4 pt-5 px-4 md:px-10 lg:px-14 text-white">
      <div className="z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Fastest</h1>
        <h1 className="text-4xl text-yellow-600 md:text-6xl font-bold">
          Delivery <span className="text-white">&</span>
        </h1>
        <h1 className="text-4xl text-yellow-600 md:text-6xl font-bold mt-1">
          Easy <span className="text-white">Pickup</span>
        </h1>
        <p className="my-6 text-xl">Get It Delivered Right To Your Door.</p>
        <div className="w-full relative pr-4 mb-4 max-w-[500px]">
          <input
            type="text"
            placeholder="Search Food Or Restaurant"
            className="bg-white text-black  rounded-2xl px-3 py-2 outline-none w-full"
          />
          <p className="absolute right-5 top-1 z-10 bg-yellow-600  px-5 py-1 rounded-2xl">
            Search
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center my-2">
            <FiClock /> <p>24/7 DELIVERY</p>
          </div>
          <div className="flex gap-2 items-center my-2">
            <BsShop /> <p>OVER 2000 RESTAURANTS</p>
          </div>
          <div className="flex gap-2 items-center my-2">
            <TbTruckDelivery /> <p>FAST DELIVERY</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:inline h-[95%] w-full relative pb-12">
        <Image
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="food"
          layout="fill"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default HomeTop;
