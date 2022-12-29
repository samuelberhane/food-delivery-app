import Image from "next/image";

const HomeTop = () => {
  return (
    <div className="home relative flex justify-end ">
      <div className="foodImg pt-8">
        <Image
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="food"
          width="700"
          height="400"
          className="rounded-xl"
        />
      </div>
      <div className="absolute deliveryText z-20 w-96">
        <h1 className="text-6xl font-bold">
          Fastest <span className="text-yellow-600">Delivery</span> & Easy{" "}
          <span className="text-yellow-600">Pickup</span>
        </h1>
        <p className="my-8 text-xl">Get It Delivered Right To Your Door.</p>
        <div className="w-full  relative">
          <input
            type="text"
            placeholder="Search Food Or Restaurat"
            className="bg-white text-black  rounded-2xl px-3 py-2 outline-none w-full"
          />
          <p className="absolute right-0 top-1 z-10 bg-yellow-600  px-5 py-1 rounded-2xl">
            Search
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
