import React from "react";
import Image from "next/image";

export default function Filter() {
  return (
    <div className="  h-96 w-64 rounded-3xl p-2 bg-gray-200">
      <div className="mt-2 mb-4 p-4 text-2xl text-center font-semibold text-gray-900">
        Filter
      </div>
      <div className="flex flex-col justify-between items-baseline">
        <div className="w-full">
          <div className="text-center w-full text-gray-900  flex flex-row justify-evenly items-center ">
            <div className=" align-middle p-2">Brand: </div>
            <label className=" align-middle p-2" for="toyota">
              Toyota <br />
              <input type="radio" value="toyota" name="brand" id="toyota" />
            </label>
            <label className=" align-middle p-2" for="lexus">
              Lexus <br />
              <input type="radio" value="Female" name="brand" id="lexus" />
            </label>
            <label className=" align-middle p-2" for="none">
              None <br />
              <input type="radio" value="Other" name="brand" id="none" />
            </label>
          </div>

          <div className="w-full text-center  flex flex-row justify-evenly items-center">
            <div className="align-middle p-2">Price:</div>

            <label className=" align-middle p-1 text-center">
              Min <br />
              <input
                className="p-2 w-full align-middle"
                type="number"
                min="0"
              />
            </label>

            <label className="align-middle p-1 text-center">
              Max <br />
              <input
                className="p-2 w-full align-middle "
                type="number"
                min="0"
              />
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full  border-t border-dashed border-gray-900 my-3 pt-3 flex flex-row justify-evenly items-center">
            <Image
              src="/icons/order.png"
              height={48}
              width={48}
              alt="Order by Price"
            />
            <Image
              src="/icons/list.png"
              height={48}
              width={48}
              alt="Toggle to List View"
            />
            <Image
              src="/icons/grid.png"
              height={48}
              width={48}
              alt="Toggle to Grid View"
            />
          </div>
          <div className="w-full flex flex-row justify-evenly items-center ">
            <button className="bg-red-400 text-gray-100 p-1 rounded-full w-1/3 ">
              Clear
            </button>
            <button className="bg-green-400 text-gray-100 p-1 rounded-full w-1/3 ">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
