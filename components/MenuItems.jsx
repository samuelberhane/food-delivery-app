import { Categories, NearYou } from "./";

const MenuItems = () => {
  return (
    <div className="">
      <div className="w-[75%] px-12 py-6">
        {/* Menu Category */}
        <Categories />

        {/* Near You */}
        <NearYou />

        {/* Most Popular */}
      </div>

      {/* Delivery */}
    </div>
  );
};

export default MenuItems;
