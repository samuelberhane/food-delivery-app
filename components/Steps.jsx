import Image from "next/legacy/image";

const Steps = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 mb-2">
        How It <span className="text-yellow-700">Works</span>{" "}
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <Image
            src="/img/order.jpeg"
            alt="online-order"
            height={100}
            width={100}
            className="my-3 rounded-md"
          />
          <h1 className="font-bold text-xl">Choose Your Favorite And Order</h1>
          <p className="w-[60%] text-center">
            Choose your favorite meals and order online or by phone.
          </p>
        </div>
        <div className="flex flex-col items-center my-4">
          <Image
            src="/img/truck.jpeg"
            alt="online-order"
            height={100}
            width={100}
            className="my-3 rounded-md"
          />
          <h1 className="font-bold text-xl">We Deliver Your Meals</h1>
          <p className="w-[60%] text-center">
            We prepared and delivered meals and arrive at your doorstep fast.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/img/plate.jpeg"
            alt="online-order"
            height={100}
            width={100}
            className="my-3 rounded-md"
          />
          <h1 className="font-bold text-xl">Eat And Enjoy</h1>
          <p className="w-[60%] text-center">
            No cooking, enjoy your healthy meals with your family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
