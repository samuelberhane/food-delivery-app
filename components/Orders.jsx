import { useState } from "react";

const Orders = ({ allOrders, handleStage, handleOrderDelete }) => {
  const [index, setIndex] = useState(6);

  return (
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
        {allOrders?.slice(0, index)?.map((order, index) => (
          <div
            className="px-2 py-1 mb-2 border-2 border-yellow-100 text-sm"
            key={index}
          >
            <div className="grid grid-cols-5 gap-4 pb-1">
              <p>{order?._id.slice(0, 5)}...</p>
              <p>{order?.customer.slice(0, 15)}</p>
              <p>${order?.address}</p>
              {order?.step === 1 && <p>Preparing</p>}
              {order?.step === 2 && <p>On The Way</p>}
              {order?.step === 3 && <p>Delivered</p>}
              <p>${order?.total}</p>
            </div>

            <div className="border-t-2 flex justify-end items-center gap-4 py-1">
              {order?.step < 3 && (
                <button
                  className="py-1 px-5 rounded bg-blue-500 text-white"
                  onClick={() => handleStage(order?._id)}
                >
                  Next Stage
                </button>
              )}

              <button
                className="py-1 px-5 rounded bg-red-500 text-white"
                onClick={() => handleOrderDelete(order?._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {allOrders.length > 6 && index < allOrders.length && (
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          onClick={() => setIndex((prev) => prev + 2)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Orders;
