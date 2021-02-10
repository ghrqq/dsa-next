import React from "react";
import Image from "next/image";

export default function ItemList({ count }) {
  return (
    <div className="bg-gray-50 flex flex-col sm:flex-row h-27 justify-evenly rounded-2xl items-center p-2 border">
      <div className="w-16 h-16 bg-red-400">IMG</div>
      <div className="hidden sm:flex h-27 flex-col justify-evenly items-center bg-gray-100">
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
        </div>{" "}
        <div>
          <Image src="/icons/russia.png" width={24} height={24} alt="Origin" />
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center  ">
        <div className="space-x-2">
          <div className="inline-block font-medium">Some Brand</div>
          <div className="inline-block text-lg">13547-18864</div>
        </div>

        <div className="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center p-4 border-r-2 border-l-2">
        <div className="text-xs line-through">18.80</div>
        <div className="text-xl text-green-400">17.30</div>
        <div className="text-xs">USD</div>
      </div>
      {count === true ? (
        <div className="flex flex-row justify-evenly items-center text-center">
          <div className="h-full w-12 flex flex-col justify-center items-center">
            <div className="w-full text-gray-900 font-extrabold text-center align-middle">
              +
            </div>

            <label className="inline-block" htmlFor="qty">
              <input
                className="inline-block p-1 w-full align-middle border-2 text-center"
                type="number"
                min="0"
                defaultValue={1}
              />
            </label>
            <div className="w-full text-gray-900 font-extrabold text-center align-middle">
              -
            </div>
          </div>

          <div className="flex flex-col items-center justify-evenly p-2">
            <div>TOTAL</div>
            <div className="text-2xl font-semibold">
              18.49 <span className="text-base font-normal">USD</span>
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
