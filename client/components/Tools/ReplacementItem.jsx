import React from "react";

export default function ReplacementItem() {
  return (
    <div className="w-60 flex flex-row flex-wrap justify-evenly items-center my-2 shadow-xl ">
      <div className="w-16 h-16 bg-red-400">IMG</div>
      <div>
        <div className="text-xs">Brand</div>
        <div>14.40</div>
        <div className="text-xs"> 14% Cheaper </div>
      </div>
      <button className="bg-green-400 text-gray-50 px-2 rounded-full">
        ADD
      </button>
    </div>
  );
}
