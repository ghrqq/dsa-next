import React, { useState } from "react";
import singleOrder from "../../singleOrder.json";
import Order from "./Order";

export default function Orders() {
  const [orderOnFocus, setorderOnFocus] = useState("");
  const [orders, setorders] = useState(singleOrder)

  const orderProvider = (val) => {
    if (val === orderOnFocus) {
      setorderOnFocus("");
      return;
    }
    setorderOnFocus(val);
  };

  return (
    <div>
      {singleOrder.length < 1 ? (
        <h2>You don't have any orders yet.</h2>
      ) : (
        <ul>
          <li>
            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-gray-500 py-4">
              <div className="w-auto sm:w-1/6 font-bold">Order #</div>
              <div className="w-auto sm:w-1/6 font-bold">Order Date</div>
              <div className="w-auto sm:w-1/6 font-bold">
                Payment/Delivery Type
              </div>
              <div className="w-auto sm:w-1/6 font-bold">Price</div>
              <div className="w-auto sm:w-1/6 font-bold">Status </div>
              <div className="w-auto sm:w-1/6 font-bold"> </div>
            </div>
          </li>
          {singleOrder.map((item) => (
            <li>
              <div
                className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-400"
                onClick={() => orderProvider(item.id)}
              >
                <div className="w-auto sm:w-1/6">{item.id}</div>
                <div className="w-auto sm:w-1/6">{item.date}</div>
                <div className="w-auto sm:w-1/6">
                  {item.payment} - {item.delivery}
                </div>
                <div className="w-auto sm:w-1/6">
                  {item.total} {item.currency}
                </div>
                <div className="w-auto sm:w-1/6 font-semibold">
                  <div
                    className={
                      item.status === "delivered"
                        ? "w-1/2 px-4 rounded-3xl text-center text-gray-50 bg-green-400"
                        : item.status === "preparing"
                        ? "w-1/2 px-4 rounded-3xl text-center text-gray-50 bg-yellow-400"
                        : item.status === "canceled"
                        ? "w-1/2 px-4 rounded-3xl text-center text-gray-50 bg-red-400"
                        : item.status === "courrier"
                        ? "w-1/2 px-4 rounded-3xl text-center text-gray-50 bg-purple-700"
                        : null
                    }
                  >
                    {item.status}{" "}
                  </div>{" "}
                </div>
                <div className=" w-auto sm:w-1/6 text-3xl ">
                  {orderOnFocus === item.id ? "-" : "+"}
                </div>
              </div>
              <div
                className={
                  orderOnFocus === item.id
                    ? "cursor-pointer"
                    : "hidden cursor-pointer"
                }
              >
                <Order items={item.items} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
