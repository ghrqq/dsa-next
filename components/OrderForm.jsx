import React, { useState } from "react";

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
      <div className="w-84 flex flex-col sm:flex-row flex-wrap justify-evenly items-stretch w-9/12 mr-4  overflow-scroll overflow-x-hidden p-8 bg-gray-50 ">
        <div className="w-84 flex flex-col justify-evenly items-stretch    shadow-2xl">
          <div
            className="w-68 bg-gray-50 text-gray-900 text-xl mx-2 mt-4 font-medium cursor-pointer text-center rounded-full px-4 py-2"
            onClick={() =>
              setboxState({
                paymentOpts: !boxState.paymentOpts,
                deliveryOpts: true,
                billingInfo: true,
                deliveryInfo: true,
              })
            }
          >
            Choose a payment method.
            <div className={boxState.paymentOpts ? "hidden" : null}>
              <div className="text-gray-900 text-xs font-normal  ">
                <div className="border px-3 py-1 rounded-full inline-block">
                  Cash
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Cash (on delivery)
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Bank Transfer
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Credit Card (soon)
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-68 bg-gray-50 text-gray-900 text-xl mx-2 mt-4 font-medium cursor-pointer text-center rounded-full px-4 py-2"
            onClick={() =>
              setboxState({
                paymentOpts: true,
                deliveryOpts: !boxState.deliveryOpts,
                billingInfo: true,
                deliveryInfo: true,
              })
            }
          >
            Choose a delivery method.
            <div className={boxState.deliveryOpts ? "hidden" : null}>
              <div className="text-gray-900 text-xs font-normal  ">
                <div className="border px-3 py-1 rounded-full inline-block">
                  Collect from store
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Taxi
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Parcel(FAST)
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Parcel(Normal)
                </div>
                <div className="border px-3 py-1 rounded-full inline-block">
                  Private Delivery (Same Day)
                </div>
              </div>
            </div>
          </div>
          <div className="w-64 flex flex-row justify-evenly items-stretch">
            <div className="w-2/5 my-3 flex flex-col text-center justify-center items-center ">
              <div>Billing Info</div>
              <div className="text-xs my-2">Use My Account Details</div>

              <div
                className="w-full rounded-full bg-indigo-400 cursor-pointer "
                onClick={() =>
                  setboxState({
                    paymentOpts: true,
                    deliveryOpts: true,
                    billingInfo: !boxState.billingInfo,
                    deliveryInfo: true,
                  })
                }
              >
                Choose
                <div className={boxState.billingInfo ? "hidden" : null}>
                  <ul>
                    <li>Bill1</li>
                    <li>Bill2</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-2/5 my-3 flex flex-col text-center justify-center items-center ">
              <div>Delivery Info</div>
              <div className="text-xs my-2">Use My Account Details</div>

              <div
                className="w-full rounded-full bg-indigo-400 cursor-pointer"
                onClick={() =>
                  setboxState({
                    paymentOpts: true,
                    deliveryOpts: true,
                    billingInfo: true,
                    deliveryInfo: !boxState.deliveryInfo,
                  })
                }
              >
                Choose
                <div className={boxState.deliveryInfo ? "hidden" : null}>
                  <ul>
                    <li>Adress1</li>
                    <li>Adress2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-84 flex flex-col justify-evenly items-stretch    shadow-2xl p-8">
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <textarea
            className="border-2 border-blue-500 my-4 rounded-2xl "
            name="address"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="w-84 flex flex-col justify-evenly items-stretch    shadow-2xl p-8">
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <input
            className="border-2 border-blue-500 my-4 rounded-2xl "
            type="text"
          />
          <textarea
            className="border-2 border-blue-500 my-4 rounded-2xl "
            name="address"
            id=""
            cols="30"
            rows="10"
          ></textarea>
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
