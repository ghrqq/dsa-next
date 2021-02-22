import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { ConfigContext } from "../pages/_app";

export default function CartItem({ count, item, calc, disp, sale }) {
  const { brand, price, origin, description, code, imgpath, quantity } = item;
  const [qty, setqty] = useState(1);
  const [lang, setlang, currency, setcurrency, rate] = useContext(
    ConfigContext
  );

  useEffect(() => {
    calc(code, qty);
  }, [qty]);

  const qtyHandler = (direction) => {
    if (direction === "-1") {
    }
  };

  return (
    <div className="bg-gray-500 flex flex-wrap flex-row h-auto  justify-evenly shadow-2xl  items-center my-2  space-x-4">
      <div className="w-16 h-16 bg-red-400">IMG</div>
      <div className="flex flex-col justify-evenly items-center w-3/6 ">
        <div className="space-x-2">
          <div className="inline-block font-medium text-xs">{brand}</div>
          <div className="inline-block text-base">{code}</div>
        </div>

        <div className="text-xs">{description}</div>
      </div>

      <div className="flex flex-col justify-evenly items-center p-4 ">
        <div className="text-xs line-through">
          {currency === "USD"
            ? Number(price / rate).toFixed(2)
            : Number(price).toFixed(2)}{" "}
        </div>
        <div className="text-xl text-green-400 ">
          {currency === "USD"
            ? Number(price / rate - (price / rate) * sale).toFixed(2)
            : Number(price - price * sale).toFixed(2)}
        </div>
        <div className="text-xs">{currency}</div>
      </div>
      {count === true ? (
        <div className="flex flex-row justify-evenly items-center text-center ">
          <div className="h-full w-12 flex flex-col justify-center items-center">
            <div
              className="w-full text-gray-900 font-extrabold text-center align-middle cursor-pointer"
              onClick={() => setqty(qty + 1)}
            >
              +
            </div>

            <label className="inline-block" htmlFor="qty">
              <input
                className="inline-block px-2 w-full align-middle border-2 text-center"
                type="number"
                min="0"
                value={qty}
                onChange={(e) => setqty(e.target.value)}
              />
            </label>
            <div
              className="w-full text-gray-900 font-extrabold text-center align-middle cursor-pointer"
              onClick={() => {
                qty > 0 ? setqty(qty - 1) : null;
              }}
            >
              -
            </div>
          </div>

          <div className="flex flex-col items-center w-1/2 ml-4 px-2 justify-evenly ">
            <div>TOTAL</div>
            <div className="text-xl font-semibold">
              {currency === "USD"
                ? Number((price / rate - (price / rate) * sale) * qty).toFixed(
                    2
                  )
                : Number((price - price * sale) * qty).toFixed(2)}
              <span className="text-base font-normal">{currency}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button className="text-gray-100 bg-green-400 rounded-full py-4 px-6">
            ADD
          </button>
        </div>
      )}
    </div>
  );
}
