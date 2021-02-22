import React, { useState } from "react";
import categories from "../categories.json";
import Link from "next/link";

export default function CategoryBox({ footer }) {
  const [catName, setcatName] = useState("");

  const catProvider = (val) => {
    if (val === catName) {
      setcatName("");
      return;
    }
    setcatName(val);
  };

  return (
    // <div className="w-11/12 my-4 sm:w-2/12 h-auto sm:h-full md:h-5/6 rounded-3xl p-4 bg-gray-200">
    <div
      className={
        footer
          ? "  h-auto w-64 rounded-3xl p-2 text-gray-50 "
          : "  h-auto w-64 rounded-3xl p-2 text-gray-900"
      }
    >
      <div className="mt-8 mb-4  text-2xl text-center font-semibold ">
        Categories
      </div>
      <div className="text-center  ">
        <ul className=" list-inside text-xl font-medium">
          {categories.map((cat) => (
            <li
              key={cat}
              className="cursor-pointer hover:bg-green-400 hover:text-gray-100"
            >
              <div onClick={() => catProvider(cat.name)}>{cat.name}</div>
              <ul
                className={
                  catName === cat.name
                    ? "cursor-pointer"
                    : "hidden cursor-pointer"
                }
              >
                {cat.children.map((child) => (
                  <li
                    key={child}
                    className="inline-block p-1 border text-xs font-normal rounded-2xl"
                  >
                    <div>
                      <Link href={`/category/${child}`}>{child}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* <li>
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
          <li>Oil & Liquid</li>*/}
        </ul>
      </div>
    </div>
  );
}
