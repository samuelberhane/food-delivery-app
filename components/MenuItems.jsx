import {
  Categories,
  NearYou,
  Popular,
  Delivery,
  Steps,
  Joinus,
  Reviews,
} from "./";

const MenuItems = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[75%] px-12 py-6 flex flex-col gap-6">
          {/* Menu Category */}
          <Categories />

          {/* Near You */}
          <NearYou />

          {/* Most Popular */}
          <Popular />
        </div>
        <div>
          {/* Delivery */}
          <Delivery />

          {/* How It Works */}
          <Steps />
        </div>
      </div>

      {/* Reviews */}
      <Reviews />
      {/* Join Us */}
      <Joinus />
    </>
  );
};

export default MenuItems;
