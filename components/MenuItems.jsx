import {
  Categories,
  NearYou,
  Popular,
  Delivery,
  Steps,
  Joinus,
  Reviews,
  Aboutus,
  Contact,
} from "./";

const MenuItems = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[85%] px-6 py-6 flex flex-col gap-6">
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

      {/* About Us */}
      <Aboutus />

      {/* Join Us */}
      <Joinus />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default MenuItems;
