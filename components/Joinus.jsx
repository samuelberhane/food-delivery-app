const Joinus = () => {
  return (
    <div className="mt-8" id="join">
      <h1 className="text-center font-bold text-3xl">
        Join Our Eat Well,
        <span className="text-yellow-700">Be Well Culture.</span>
      </h1>
      <p className="text-center my-3">
        Stay up to date with our openings,upcoming events,seasonal specials, and
        promotions.
      </p>
      <div className="flex items-center justify-center mt-6">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="outline-none border-2 px-2 py-2 w-[70%] md:w-[60%] lg:w-[50%] bg-gray-300"
        />
        <button className="bg-black text-white h-11 px-2 text-sm">
          SIGN ME UP!
        </button>
      </div>
    </div>
  );
};

export default Joinus;
