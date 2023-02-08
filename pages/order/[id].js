import { Delivery } from "../../components";
import { MdPayments, MdDeliveryDining } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import axios from "axios";

const Orders = ({ order }) => {
  const index = order?.step;
  const steps = (stepNumber) => {
    if (stepNumber - index === 2) return "ongoing";
    if (stepNumber - index > 2) return "next";
    if (stepNumber - index < 2) return "active";
  };
  return (
    <div className="order flex flex-col md:flex-row px-2 py-4 justify-center gap-2 md:gap-8 ">
      <div className="pt-4 md:px-4">
        <div className="flex items-center justify-between md:gap-8">
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-sm md:text-xl lg:text-2xl whitespace-nowrap">
              Order ID
            </h1>
            <p className="text-sm md:text-lg">{order?._id.slice(0, 5)}...</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-sm md:text-xl lg:text-2xl">
              Customer
            </h1>
            <p className="text-sm md:text-lg whitespace-nowrap">
              {order?.customer.slice(0, 15)}
            </p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-sm md:text-xl lg:text-2xl">
              Address
            </h1>
            <p className="text-sm md:text-lg whitespace-nowrap">
              {order?.address}
            </p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-sm md:text-xl lg:text-2xl">Total</h1>
            <p className="text-sm md:text-lg">${order?.total}</p>
          </div>
        </div>

        <div className="flex items-center justify-between  mt-4 md:mt-6">
          <div className={`flex flex-col items-center gap-2 ${steps(1)}`}>
            <MdPayments className="text-lg md:text-xl" />
            <h1 className="text-yellow-600  font-bold">Payment</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(2)}`}>
            <GiProgression className="text-lg md:text-xl" />
            <h1 className="text-yellow-600 font-bold">Preparing</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(3)}`}>
            <MdDeliveryDining className="text-lg md:text-xl" />
            <h1 className="text-yellow-600 font-bold">On The Way</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(4)}`}>
            <AiOutlineDeliveredProcedure className="text-lg md:text-xl" />
            <h1 className="text-yellow-600 font-bold">Delivered</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/orders/${params.id}`
  );

  return {
    props: {
      order: data,
    },
  };
};

export default Orders;
