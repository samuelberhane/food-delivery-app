const Joinus = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center font-bold text-4xl">
        JOIN OUR EAT WELL,
        <span className="text-yellow-700">BE WELL CULTURE.</span>
      </h1>
      <p className="text-center my-3 ">
        Stay up to date with our openings,upcoming events,seasonal specials, and
        promotions.
      </p>
      <div className="flex items-center justify-center mt-6 ">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="outline-none border-2 px-4 py-2 w-[50%] bg-gray-300"
        />
        <button className="bg-black text-white h-11 px-4">SIGN ME UP!</button>
      </div>
    </div>
  );
};

export default Joinus;
