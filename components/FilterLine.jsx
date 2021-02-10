import React from "react";
import Image from "next/image";

export default function FilterLine({ viewHandler }) {
  return (
    <div className="block rounded-3xl bg-gray-100 h-auto ">
      <div className="flex flex-row justify-center items-center flex-wrap sm:flex-nowrap  mx-auto text-xs">
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
            <input className="p-2 w-full align-middle" type="number" min="0" />
          </label>

          <label className="align-middle p-1 text-center">
            Max <br />
            <input className="p-2 w-full align-middle " type="number" min="0" />
          </label>
        </div>

        <div className="w-full   my-3 pt-3 flex flex-row justify-evenly items-center">
          <Image
            src="/icons/order.png"
            height={48}
            width={48}
            alt="Order by Price"
          />
          <button onClick={viewHandler}>
            <Image
              src="/icons/list.png"
              height={48}
              width={48}
              alt="Toggle to List View"
            />
          </button>
          <button onClick={viewHandler}>
            <Image
              src="/icons/grid.png"
              height={48}
              width={48}
              alt="Toggle to Grid View"
            />
          </button>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center pb-2 sm:pb-0">
          <button className="bg-red-400 text-gray-100 p-1 rounded-full w-1/3 ">
            Clear
          </button>
          <button className="bg-green-400 text-gray-100 p-1 rounded-full w-1/3 ">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
