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
    <div className="order flex px-8 py-4 justify-center gap-28">
      <div className="pt-8 pf-6  p-6">
        <div className="flex items-center gap-12">
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Order ID</h1>
            <p className="text-lg">{order?._id}</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Customer</h1>
            <p className="text-lg">{order?.customer}</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Address</h1>
            <p className="text-lg">{order?.address}</p>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <h1 className="font-bold text-2xl">Total</h1>
            <p className="text-lg">${order?.total}</p>
          </div>
        </div>

        <div className="flex items-center justify-between  mt-10">
          <div className={`flex flex-col items-center gap-2 ${steps(1)}`}>
            <MdPayments className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">Payment</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(2)}`}>
            <GiProgression className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">Preparing</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(3)}`}>
            <MdDeliveryDining className="text-4xl" />
            <h1 className="text-yellow-600 text-xl font-bold">On The Way</h1>
            <AiFillCheckCircle className="text-green-400 text-xl check" />
          </div>
          <div className={`flex flex-col items-center gap-2 ${steps(4)}`}>
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
