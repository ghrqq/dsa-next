import React from "react";
import Image from "next/image";

export default function ItemBox() {
  return (
    <div className="  h-96 w-64 rounded-3xl p-2 bg-gray-200">
      <div className="flex flex-col justify-evenly items-center">
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
          </div>{" "}
          <div>
            <Image
              src="/icons/russia.png"
              width={24}
              height={24}
              alt="Origin"
            />
          </div>
          <div className="text-lg">17894-16841</div>
        </div>
        <div className="text-lg text-center font-medium">Brand</div>
        <div className="text-xs text-justify p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div className="border-t-1 border-gray-900 flex flex-col w-full justify-evenly items-center">
          <div className=" text-xs">
            <div className="line-through inline-block">17.90</div>
            <div className="text-red-400 inline-block ml-4 no-underline text-xl">
              8%
            </div>
          </div>
          <div className="text-3xl text-green-400">16.60</div>
          <div className="text-gray-100 bg-green-400 w-5/6 rounded-full text-center p-2">
            ADD
          </div>
        </div>
      </div>
    </div>
  );
}
