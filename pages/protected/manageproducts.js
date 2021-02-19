import React, { useState } from "react";
import FindProducts from "../../components/ProtectedComponents/FindProducts";
import Layout from "../../themes/Layout";
// DEV ONLY

import products from "../../items.json";
import ProductListItem from "../../components/ProtectedComponents/ProductListItem";

export default function manageproducts() {
  const [items, setitems] = useState(products);
  const [itemOnFocus, setitemOnFocus] = useState("");
  const [count, setcount] = useState(0);

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
      setcount(count + 1);
      setcheckedArr(tempArr);

      return;
    }
    const removedArr = tempArr.filter((i) => i !== val);
    setcount(count + 1);
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
        <div className=" px-4 w-full bg-gray-500 flex flex-row justify-evenly items-center">
          <div className="w-1/6">Code #</div>
          <div className="w-1/6">Brand</div>
          <div className="w-1/6">
            Category/ <br /> Subcategory{" "}
          </div>
          <div className="w-1/6">Origin</div>
          <div className="w-1/6">Price</div>
          <div className="w-1/6 text-right">
            {checkedArr.length <= 0 ? null : (
              <span>{checkedArr.length} items selected</span>
            )}
            <input
              checked={checkedArr.length == items.length ? true : false}
              type="checkbox"
              className=""
              onChange={checkAll}
            />
          </div>
        </div>
        {!items
          ? null
          : items.map((item) => (
              <ProductListItem
                item={item}
                checkHandler={handleCheck}
                checked={isChecked(item.code)}
              />
              //   <div className="w-full ">
              //     <div className="px-4 w-full bg-gray-300 flex flex-row justify-evenly items-center">
              //       <div className="w-1/6">{item.code}</div>
              //       <div className="w-1/6">{item.brand}</div>
              //       <div className="w-1/6">
              //         {item.category}/{item.subcategory}{" "}
              //       </div>
              //       <div className="w-1/6">{item.origin}</div>
              //       <div className="w-1/6">{item.price}</div>
              //       <div className="w-1/6 text-right">
              //         <button
              //           className="inline-block w-1/3"
              //           onClick={() => detailProvider(item.code)}
              //         >
              //           {itemOnFocus === item.code ? "-" : "+"}
              //         </button>
              //         <input
              //           className="w-1/3 "
              //           type="checkbox"
              //           checked={isChecked(item.code)}
              //           onChange={() => handleCheck(item.code)}
              //         />
              //       </div>
              //     </div>

              //     <div className={itemOnFocus === item.code ? null : "hidden"}>
              //       <div className="bg-red-300">
              //         {item.description} {item.compatible}
              //       </div>
              //     </div>
              //   </div>
            ))}

        {/* Button Box */}
        <div className="w-5/6 flex flex-row flex-wrap justify-evenly items-justify  mx-auto">
          <button className="px-2 py-4 rounded-xl bg-red-400 text-gray-50">
            Deactivate Selection
          </button>
          <button className="px-2 py-4 rounded-xl bg-green-400 text-gray-50">
            Activate Selection
          </button>
          <button className="px-2 py-4 rounded-xl bg-red-900 text-gray-50">
            Permanently Delete Selection
          </button>
        </div>

        {/* End of Button Box */}
      </div>
    </Layout>
  );
}
