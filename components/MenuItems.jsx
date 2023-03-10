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

const MenuItems = ({ foodList }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="px-2 py-4 flex flex-col gap-4 lg:flex-3">
          {/* Menu Category */}
          <Categories />

          {/* Near You */}
          <NearYou foodList={foodList} />

          {/* Most Popular */}
          <Popular foodList={foodList} />
        </div>
        <div className="px-2 lg:flex-1">
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
