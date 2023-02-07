import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Admin = ({ items, orders }) => {
  const [allItems, setAllItems] = useState(items);
  const [allOrders, setAllOrders] = useState(orders);

  const handleDelete = async (id) => {
    await axios.delete(`${[process.env.NEXT_PUBLIC_HOST]}/api/items/${id}`);
    setAllItems(allItems?.filter((item) => item._id !== id));
  };

  const handleStage = async (id) => {
    const currentOrder = allOrders.find((order) => order._id === id);

    const updatedOrder = await axios.put(
      `${[process.env.NEXT_PUBLIC_HOST]}/api/orders/${id}`,
      { step: currentOrder.step + 1 }
    );

    setAllOrders(
      allOrders.map((order) => {
        if (order._id === id) return updatedOrder.data;
        else return order;
      })
    );
  };

  return (
    <div className="min-h-[60vh] mt-4 px-3 md:px-4 grid grid-cols-1 xl:grid-cols-2 xl:gap-3">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Food <span className="text-yellow-600">Items</span>
        </h1>
        <div className="bg-white">
          <div className="grid grid-cols-8 gap-4 bg-[#ecefd2] px-2 py-1">
            <p>Id</p>
            <p>Name</p>
            <p>Image</p>
            <p>Price</p>
            <p>Categories</p>
            <p>Restaurant</p>
            <p>Distance</p>
            <p>Rate</p>
          </div>
          {allItems?.map((item, index) => (
            <div
              className="px-2 py-1 mb-2 border-2 border-yellow-100 text-sm"
              key={index}
            >
              <div className="grid grid-cols-8 gap-4 pb-1">
                <p>{item?._id.slice(0, 5)}...</p>
                <p>{item?.name}</p>
                <div className="relative h-10 w-14">
                  <Image src={item?.image} alt="itemImage" layout="fill" />
                </div>

                <p>${item?.price}</p>
                <div>
                  {item?.category?.map((cat, index) => (
                    <p key={index}>{cat}</p>
                  ))}
                </div>
                <p>{item?.restaurant}</p>
                <p>{item?.distance}</p>
                <p>{item?.rate}</p>
              </div>
              <div className="border-t-2 flex justify-end items-center gap-4 py-1">
                <button className="py-1 px-5 rounded bg-blue-500 text-white">
                  Edit
                </button>
                <button
                  className="py-1 px-5 rounded bg-red-500 text-white"
                  onClick={() => handleDelete(item?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Order<span className="text-yellow-600">s</span>
        </h1>
        <div className="bg-white">
          <div className="grid grid-cols-5 gap-4 bg-[#ecefd2] px-2 py-1">
            <p>Id</p>
            <p>Customer</p>
            <p>Address</p>
            <p>Status</p>
            <p>Total</p>
          </div>
          {allOrders?.map((order, index) => (
            <div
              className="px-2 py-1 mb-2 border-2 border-yellow-100 text-sm"
              key={index}
            >
              <div className="grid grid-cols-5 gap-4 pb-1">
                <p>{order?._id.slice(0, 5)}...</p>
                <p>{order?.customer}</p>
                <p>${order?.address}</p>
                {order?.step === 1 && <p>Preparing</p>}
                {order?.step === 2 && <p>On The Way</p>}
                {order?.step === 3 && <p>Delivered</p>}
                <p>${order?.total}</p>
              </div>
              <div className="border-t-2 flex justify-end items-center gap-4 py-1">
                <button
                  disabled={order?.step === 3}
                  className="py-1 px-5 rounded bg-blue-500 text-white"
                  onClick={() => handleStage(order?._id)}
                >
                  Next Stage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const items = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/items`);
  const orders = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/orders`);
  return {
    props: {
      items: items?.data,
      orders: orders?.data,
    },
  };
};

export default Admin;
