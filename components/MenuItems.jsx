import { Categories, NearYou, Popular, Delivery, Steps, Joinus } from "./";

const MenuItems = () => {
  return (
    <div className="flex">
      <div className="w-[75%] px-12 py-6 flex flex-col gap-6">
        {/* Menu Category */}
        <Categories />

        {/* Near You */}
        <NearYou />

        {/* Most Popular */}
        <Popular />

        {/* Join Us */}
        <Joinus />
      </div>

      <div>
        {/* Delivery */}
        <Delivery />

        {/* How It Works */}
        <Steps />
      </div>
    </div>
  );
};

export default MenuItems;
