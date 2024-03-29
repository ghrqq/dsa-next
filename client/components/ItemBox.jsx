import React from "react";
import Image from "next/image";

export default function ItemBox({ item, adder, rate, currency, sale }) {
  const { brand, price, origin, description, code, imgpath } = item;

  return (
    <div className="  h-auto w-64 rounded-3xl p-2 mx-2 bg-gray-200">
      <div className="flex flex-col h-96 justify-between items-center">
        <div className="w-36 h-36 rounded-3xl my-2 bg-red-400">IMG</div>
        <div className="w-64 h-8 bg-gray-300 flex flex-row justify-evenly items-end">
          <div>
            <Image
              src="/icons/check.png"
              width={24}
              height={24}
              alt="Verified producer."
            />
          </div>
          <div>
            <Image
              src="/icons/fast.png"
              width={24}
              height={24}
              alt="Fast delivery."
            />
          </div>
          <div>
            <Image
              src="/icons/russia.png"
              width={24}
              height={24}
              alt="Origin"
            />
          </div>
          <div className="text-lg">{code}</div>
        </div>
        <div className="text-lg text-center font-medium">{brand}</div>
        <div className="text-xs h-1/6 text-justify  p-2">{description}</div>
        <div className="border-t-1 border-gray-900 flex flex-col w-full justify-evenly items-center">
          <div className=" text-xs">
            <div className="line-through inline-block">
              {currency === "USD"
                ? Number(price / rate).toFixed(2)
                : Number(price).toFixed(2)}
            </div>
            <div className="text-red-400 inline-block ml-4 no-underline text-xl">
              {sale * 100}%
            </div>
          </div>
          <div className="text-3xl inline-block align-middle text-green-400">
            {currency === "USD"
              ? Number(price / rate - (price / rate) * sale).toFixed(2)
              : Number(price - price * sale).toFixed(2)}
            <div className="text-xs text-gray-900 align-middle inline-block">
              {currency === "USD" ? "USD" : "UAH"}
            </div>
          </div>
          <div
            className="text-gray-100 bg-green-400 w-5/6 rounded-full text-center p-2 cursor-pointer"
            onClick={() => adder(item)}
          >
            ADD
          </div>
        </div>
      </div>
    </div>
  );
}
