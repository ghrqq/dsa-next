import React from "react";

export default function Agent() {
  return (
    <div className="flex flex-row justify-center items-center mr-4">
      <div className="w-10 h-10 bg-blue-400 rounded-full text-center align-middle p-1">
        SK
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-gray-900 sm:text-gray-300 text-xs">
          Sergei Kalininskaya
        </div>
        <div className="text-gray-900 sm:text-gray-300 text-xs">
          +380 555 55 55
        </div>
        <div className="text-gray-900 sm:text-gray-300 text-xs">
          sergei@dsa-auto.com
        </div>
      </div>
    </div>
  );
}
