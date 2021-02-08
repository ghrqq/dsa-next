import React from "react";
import Image from "next/image";

export default function CartItem({ count }) {
  return (
    <div className="bg-gray-50 flex flex-col sm:flex-row h-20 justify-evenly shadow-2xl  items-center my-2  space-x-4">
      <div className="w-16 h-16 bg-red-400">IMG</div>
      {/* <div className="hidden sm:flex h-27 flex-col justify-evenly items-center bg-gray-100">
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
      </div> */}
      <div className="flex flex-col justify-evenly items-center  ">
        <div className="space-x-2">
          <div className="inline-block font-medium text-xs">Some Brand</div>
          <div className="inline-block text-base">13547-18864</div>
        </div>

        <div className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center p-4 ">
        <div className="text-xs line-through">18.80</div>
        <div className="text-xl text-green-400 ">17.30</div>
        <div className="text-xs">USD</div>
      </div>
      {count === true ? (
        <div className="flex flex-row justify-evenly items-center text-center ">
          <div className="h-full w-12 flex flex-col justify-center items-center">
            <div className="w-full text-gray-900 font-extrabold text-center align-middle">
              +
            </div>

            <label className="inline-block" htmlFor="qty">
              <input
                className="inline-block px-2 w-full align-middle border-2 text-center"
                type="number"
                min="0"
                defaultValue={1}
              />
            </label>
            <div className="w-full text-gray-900 font-extrabold text-center align-middle">
              -
            </div>
          </div>

          <div className="flex flex-col items-center px-2 justify-evenly ">
            <div>TOTAL</div>
            <div className="text-xl font-semibold">
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
