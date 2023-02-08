import axios from "axios";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { CreateItem, Items, Orders } from "../../components";

const Admin = ({ items, orders }) => {
  const [allItems, setAllItems] = useState(items);
  const [allOrders, setAllOrders] = useState(orders);

  // delete item
  const handleItemDelete = async (id) => {
    await axios.delete(`${[process.env.NEXT_PUBLIC_HOST]}/api/items/${id}`);
    setAllItems(allItems?.filter((item) => item._id !== id));
  };

  // delete order
  const handleOrderDelete = async (id) => {
    await axios.delete(`${[process.env.NEXT_PUBLIC_HOST]}/api/orders/${id}`);
    setAllOrders(allOrders?.filter((order) => order._id !== id));
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
    <div className="min-h-[60vh] mt-4 px-3 md:px-4">
      <CreateItem setAllItems={setAllItems} />
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-3">
        <Items allItems={allItems} handleItemDelete={handleItemDelete} />
        <Orders
          allOrders={allOrders}
          handleStage={handleStage}
          handleOrderDelete={handleOrderDelete}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
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
