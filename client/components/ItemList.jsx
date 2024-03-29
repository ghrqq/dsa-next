import React from "react";
import Image from "next/image";
import ItemIconSet from "./Tools/ItemIconSet";

export default function ItemList({ item, adder, rate, currency, sale }) {
  const { brand, price, origin, description, code, imgpath } = item;
  return (
    <div className="bg-gray-50 w-full flex flex-col sm:flex-row h-27 justify-between rounded-2xl items-center p-2 border">
      <div className="w-20 h-20 bg-red-400">{imgpath}</div>
      <div className="hidden sm:flex h-27 flex-col justify-evenly items-center bg-gray-100">
        <div className="justify-self-start">
          <ItemIconSet direction="col" />
        </div>
      </div>
      <div className="flex flex-col w-2/5 justify-evenly items-center  ">
        <div className="space-x-2">
          <div className="inline-block font-medium">{brand}</div>
          <div className="inline-block text-lg">{code}</div>
        </div>

        <div className="p-2">{description}</div>
      </div>
      <div className="flex flex-col justify-evenly items-center p-4 border-r-2 justify-self-end border-l-2">
        <div className="text-xs line-through">
          {" "}
          {currency === "USD"
            ? Number(price / rate).toFixed(2)
            : Number(price).toFixed(2)}
        </div>
        <div className="text-xl text-green-400">
          {currency === "USD"
            ? Number(price / rate - (price / rate) * sale).toFixed(2)
            : Number(price - price * sale).toFixed(2)}
        </div>
        <div className="text-xs">{currency === "USD" ? "USD" : "UAH"}</div>
      </div>

      <div>
        <button
          className="text-gray-100 bg-green-400 rounded-full py-4 px-6"
          onClick={() => adder(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
