import React, { useState } from "react";

export default function Options({ displayOnly }) {
  const [show, setshow] = useState("payment");

  return (
    <div>
      <div className="flex flex-row justify-center items-center space-x-3 outline-none">
        <button
          value="payment"
          onClick={(e) => setshow(e.target.value)}
          className={
            show === "payment"
              ? "text-gray-900 text-xl font-bold p-2 bg-gray-300 rounded-lg focus:outline-none shadow-inner"
              : "text-gray-900 text-xl font-semibold p-2 shadow-md rounded-lg"
          }
        >
          Payment <br /> Options
        </button>
        <button
          value="delivery"
          onClick={(e) => setshow(e.target.value)}
          className={
            show !== "payment"
              ? "text-gray-900 text-xl font-bold p-2 bg-gray-300 rounded-lg focus:outline-none shadow-inner"
              : "text-gray-900 text-xl font-semibold p-2 shadow-md rounded-lg"
          }
        >
          Delivery <br /> Options
        </button>
      </div>
      <div
        className={
          show === "payment"
            ? "my-3 border-b-2 border-dashed border-gray-900"
            : "hidden"
        }
      >
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Cash
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Cash on Delivery
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Bank Transfer
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Credit Card
        </button>
      </div>
      <div
        className={
          show === "delivery"
            ? "my-3 border-b-2 border-dashed border-gray-900"
            : "hidden"
        }
      >
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Taxi
        </button>

        <button className="block text-sm ml-4" disabled={displayOnly}>
          Standart Parcel
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Fast Parcel
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Pick up from store
        </button>
        <button className="block text-sm ml-4" disabled={displayOnly}>
          Private Delivery
        </button>
      </div>
    </div>
  );
}
