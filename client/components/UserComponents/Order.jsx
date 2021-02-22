import React from "react";
import Link from "next/link";

export default function Order({ items }) {
  return (
    <div className="w-4/6 mx-auto border bg-gray-300 ">
      <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center text-left">
        <div className="w-auto sm:w-1/5 font-bold">Item #</div>
        <div className="w-auto sm:w-1/5 font-bold">Category</div>
        <div className="w-auto sm:w-1/5 font-bold">Price</div>
        <div className="w-auto sm:w-1/5 font-bold">Quantity</div>
        <div className="w-auto sm:w-1/5 font-bold">Total</div>
      </div>
      {items
        ? items.map((item) => (
            <div className="flex flex-col sm:flex-row w-5/6 justify-evenly items-center text-center">
              <div className="w-auto sm:w-1/5 text-center ">{item.code}</div>
              <Link href={`/category/${item.subcategory}`}>
                <div className="w-auto sm:w-1/5 text-center ">
                  {item.category}/{item.subcategory}
                </div>
              </Link>
              <div className="w-auto sm:w-1/5 text-center ">{item.price}</div>
              <div className="w-auto sm:w-1/5 text-center ">
                {" "}
                x{item.quantity}
              </div>
              <div className="w-auto sm:w-1/5 text-center ">{item.total}</div>
            </div>
          ))
        : null}

      <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-end items-center  text-center border-t-2 border-gray-900 border-dashed">
        <button className="bg-green-400 rounded-3xl text-gray-50 my-2 py-2 px-4 sm:px-0 sm:w-1/5">
          ADD to CART
        </button>
      </div>
    </div>
  );
}
