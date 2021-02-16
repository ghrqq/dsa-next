import React, { useState } from "react";
import Adresses from "./UserComponents/Adresses";
import BillingInfos from "./UserComponents/BillingInfos";

export default function OrderForm({ stepper }) {
  const [options, setoptions] = useState({
    paymentMethod: "Choose payment option",
    deliveryMethod: "Choose delivery option",
    billingInfo: "Choose",
    deliveryInfo: "Choose",
  });

  const [boxState, setboxState] = useState({
    paymentOpts: true,
    deliveryOpts: true,
    billingInfo: true,
    deliveryInfo: true,
  });

  return (
    <div className="w-full h-auto min-h-screen opacity-100 z-50  bg-gray-600 bg-opacity-60  mx-auto  sm:absolute sm:right-0 top-auto flex flex-col justify-evenly items-end">
      <div className=" flex flex-col sm:flex-row flex-wrap justify-evenly items-center w-9/12 mr-4  overflow-scroll overflow-x-hidden p-2 bg-gray-50 ">
        <div className="w-1/2 border">
          <BillingInfos use={true} />
        </div>
        <div className="w-1/2 border">
          <Adresses use={true} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-9/12 mr-4 items-center sm:mb-96 bg-gray-600 text-center">
        <div className="flex flex-col sm:flex-row justify-start items-center w-full">
          <div className="flex flex-col justify-evenly items-center w-36 px-2">
            <div className="bg-red-400 w-full text-gray-100 px-2 py-1 rounded-full my-1">
              EMPTY CART
            </div>
            <div
              className="bg-green-400 w-full text-gray-100 px-2 py-1 rounded-full my-1"
              onClick={() => stepper(-1)}
            >
              SAVE
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between my-4 items-center">
          <div className="text-gray-100 mr-4 my-2 text-3xl">56.80 USD</div>
          <div
            className="bg-green-400 h-full my-2 mr-4 text-2xl text-gray-100 px-10  py-2 rounded-full"
            onClick={() => stepper(+1)}
          >
            ORDER
          </div>
        </div>
      </div>
    </div>
  );
}
