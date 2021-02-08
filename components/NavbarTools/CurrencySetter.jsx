import React from "react";

export default function CurrencySetter() {
  return (
    <div className="w-20  flex flex-col justify-center items-center mr-4">
      <select className="bg-gray-700" name="" id="">
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
      </select>

      <span className="text-red-400 text-xs text-center w-full">1.12</span>
    </div>
  );
}
