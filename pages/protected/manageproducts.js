import React, { useState } from "react";
import FindProducts from "../../components/ProtectedComponents/FindProducts";
import Layout from "../../themes/Layout";
// DEV ONLY

import items from "../../items.json";

export default function manageproducts() {
  const [itemOnFocus, setitemOnFocus] = useState("");

  const [state, setstate] = useState();
  const [checkedArr, setcheckedArr] = useState([]);

  const isChecked = (val) => {
    const index = checkedArr.indexOf(val);
    if (index >= 0) {
      return true;
    }
    return false;
  };
  const handleCheck = (val) => {
    let tempArr = checkedArr;
    let index = tempArr.indexOf(val);
    if (index < 0) {
      tempArr.push(val);

      setcheckedArr(tempArr);

      return;
    }
    const removedArr = tempArr.filter((i) => i !== val);

    setcheckedArr(removedArr);

    return;
  };

  const checkAll = () => {
    if (checkedArr.length == items.length) {
      setcheckedArr([]);
      return;
    }

    let tempArr = items.map((i) => i.code);

    setcheckedArr(tempArr);
  };

  const detailProvider = (val) => {
    if (val === itemOnFocus) {
      setitemOnFocus("");
      return;
    }
    setitemOnFocus(val);
  };

  const getItems = () => {
    const arr = state.split("\n");
    console.log(arr);
  };

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <Layout>
      <div className="w-5/6 flex flex-row flex-wrap justify-evenly items-justify bg-gray-500 mx-auto">
        <div className="w-1/3">
          <FindProducts stateSetter={handleChange} itemGetter={getItems} />
        </div>
        <div className="w-2/3 my-8 bg-yellow-400 mx-auto">
          Product filters will come here.
        </div>
      </div>

      <div className="w-5/6 flex my-2 py-2 flex-row flex-wrap justify-evenly items-justify bg-blue-500 mx-auto">
        <div className=" w-full bg-gray-500 flex flex-row justify-evenly items-center">
          <div className="w-1/6">Code #</div>
          <div className="w-1/6">Brand</div>
          <div className="w-1/6">
            Category/ <br /> Subcategory{" "}
          </div>
          <div className="w-1/6">Origin</div>
          <div className="w-1/6">Price</div>
          <div className="w-1/6">
            {checkedArr.length <= 0 ? null : (
              <span>
                {checkedArr.length} <br /> items selected
              </span>
            )}
            <input
              checked={checkedArr.length == items.length ? true : false}
              type="checkbox"
              onChange={checkAll}
            />
          </div>
        </div>
        {items.map((item) => (
          <div className="w-full ">
            <div className=" w-full bg-gray-300 flex flex-row justify-evenly items-center">
              <div className="w-1/6">{item.code}</div>
              <div className="w-1/6">{item.brand}</div>
              <div className="w-1/6">
                {item.category}/{item.subcategory}{" "}
              </div>
              <div className="w-1/6">{item.origin}</div>
              <div className="w-1/6">{item.price}</div>
              <div className="w-1/6">
                <button
                  className="inline-block w-1/3"
                  onClick={() => detailProvider(item.code)}
                >
                  {itemOnFocus === item.code ? "-" : "+"}
                </button>
                <input
                  className="w-1/3"
                  type="checkbox"
                  //   checked={isChecked(item.code)}
                  checked={checkedArr.indexOf(item.code) ? false : true}
                  onChange={() => handleCheck(item.code)}
                />
              </div>
            </div>

            <div className={itemOnFocus === item.code ? null : "hidden"}>
              <div className="bg-red-300">
                {item.description} {item.compatible}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
