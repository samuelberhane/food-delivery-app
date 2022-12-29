import { TbTruckDelivery } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Delivery = () => {
  return (
    <div className="delivery mt-12">
      <div className="flex gap-4 items-center">
        <TbTruckDelivery className="text-6xl p-3 rounded-full shadow-xl" />
        <div>
          <h1 className="font-bold text-xl">
            Fast <span className="text-yellow-600">Delivery</span>{" "}
          </h1>
          <p>Promise to delivery in 30 mins.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center my-5">
        <FaSuitcase className="text-6xl p-3 rounded-full shadow-xl" />
        <div>
          <h1 className="font-bold text-xl">
            Pick <span className="text-yellow-600">Up</span>{" "}
          </h1>
          <p>Pickup delivery at your doorstep.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <GiForkKnifeSpoon className="text-6xl p-3 rounded-full shadow-xl" />
        <div>
          <h1 className="font-bold text-xl">
            Dine <span className="text-yellow-600">In</span>{" "}
          </h1>
          <p>Enjoy your fresh, crispy and hot food.</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
