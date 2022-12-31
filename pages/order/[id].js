import { Delivery } from "../../components";
import { MdPayments, MdDeliveryDining } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const order = () => {
  const index = 1;
  const step = (stepNumber) => {
    if (stepNumber - index === 1) return "ongoing";
    if (stepNumber - index > 1) return "next";
    if (stepNumber - index < 1) return "active";
  };
  return (
    <div className="order flex px-8 py-4 justify-center gap-28">
      <div className="pt-8 pf-6  p-6">
        <div className="flex items-center gap-12">
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Order ID</h1>
            <p className="text-lg">1234342</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Customer</h1>
            <p className="text-lg">John Smith</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Address</h1>
            <p className="text-lg">Elton st.345 235 LA</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Total</h1>
            <p className="text-lg">$155</p>
          </div>
        </div>

        <div className="flex items-center justify-between  mt-10">
          <div className={`flex flex-col items-center gap-2 ${step(1)}`}>
            <MdPayments className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">Payment</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${step(2)}`}>
            <GiProgression className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">Preparing</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${step(3)}`}>
            <MdDeliveryDining className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">On The Way</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${step(4)}`}>
            <AiOutlineDeliveredProcedure className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">Delivered</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};

export default order;
