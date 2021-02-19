import React, { useState } from "react";

export default function ProductListItem({ item, checkHandler, checked }) {
  const [isExpand, setisExpand] = useState(false);
  const [product, setproduct] = useState(item);
  const [count, setcount] = useState(1);
  const [isEdit, setisEdit] = useState(false);

  const {
    code,
    brand,
    price,
    origin,
    description,
    category,
    subcategory,
    compatible,
  } = product;

  return (
    <div className="w-full ">
      <div className="px-4 w-full bg-gray-300 flex flex-row justify-evenly items-center">
        <input className="w-1/6" placeholder={code} disabled={!isEdit} />
        <input className="w-1/6" placeholder={brand} disabled={!isEdit} />
        <input className="w-1/6" placeholder={category} disabled={!isEdit} />
        <input className="w-1/6" placeholder={subcategory} disabled={!isEdit} />
        <input className="w-1/6" placeholder={origin} disabled={!isEdit} />
        <input className="w-1/6" placeholder={price} disabled={!isEdit} />

        {/* <div className="w-1/6">{brand}</div>
        <div className="w-1/6">
          {category}/{subcategory}{" "}
        </div>
        <div className="w-1/6">{origin}</div>
        <div className="w-1/6">{price}</div> */}
        <div className="w-1/6 text-right">
          <button
            className="inline-block w-1/3"
            onClick={() => setisExpand(!isExpand)}
          >
            {isExpand ? "-" : "+"}
          </button>
          <input
            className="w-1/3 "
            type="checkbox"
            checked={checked}
            onChange={() => checkHandler(code)}
          />
        </div>
      </div>

      <div className={isExpand ? null : "hidden"}>
        <div className="bg-red-300">
          {description} {compatible}
        </div>
        <div>
          <button
            className="bg-yellow-400 text-gray-50 rounded-xl px-4 py-2"
            onClick={() => setisEdit(!isEdit)}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}
