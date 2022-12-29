import { Categories, NearYou, Popular, Delivery } from "./";

const MenuItems = () => {
  return (
    <div className="flex">
      <div className="w-[75%] px-12 py-6">
        {/* Menu Category */}
        <Categories />

        {/* Near You */}
        <NearYou />

        {/* Most Popular */}
        <Popular />
      </div>

      {/* Delivery */}

      <Delivery />
    </div>
  );
};

export default MenuItems;
