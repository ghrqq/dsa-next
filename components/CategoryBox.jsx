import React from "react";

export default function CategoryBox() {
  return (
    // <div className="w-11/12 my-4 sm:w-2/12 h-auto sm:h-full md:h-5/6 rounded-3xl p-4 bg-gray-200">
    <div className="  h-96 w-64 rounded-3xl p-2 bg-gray-100">
      <div className="mt-2 mb-4  text-2xl text-center font-semibold text-gray-900">
        Categories
      </div>
      <div className="text-center text-gray-900 ">
        <ul className=" list-inside text-xl font-medium">
          <li>
            Accessory
            <ul className={`${"hidden"}`}>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Top
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Bottom
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Window
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Tire
              </li>
            </ul>
          </li>
          <li>
            Spare Parts
            <ul className={`${"visible"}`}>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Top
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Bottom
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Window
              </li>
              <li className="inline-block p-1 border text-xs font-normal rounded-2xl">
                Tire
              </li>
            </ul>
          </li>
          <li>Engine</li>
          <li>Electric</li>
          <li>Transmission</li>
          <li>Oil & Liquid</li>
        </ul>
      </div>
    </div>
  );
}
