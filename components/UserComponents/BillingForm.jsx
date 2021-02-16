import React, { useState } from "react";

export default function BillingForm({ item }) {
  const [state, setstate] = useState({});

  const changeHandler = (e) => {
    let val = e.target.value;
    let nam = e.target.name;

    let temp = state;

    temp[nam] = val;

    setstate(temp);
  };
  return (
    <div>
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.name ? item.name : "Name"}
        name="name"
        value={state.name}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.taxnr ? item.taxnr : "Tax Number"}
        name="taxnr"
        value={state.taxnr}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.city ? item.city : "City"}
        name="city"
        value={state.city}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.postcode ? item.postcode : "Postcode"}
        name="postcode"
        value={state.postcode}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.country ? item.country : "Country"}
        name="country"
        value={state.country}
        onChange={changeHandler}
      />
      <textarea
        name="address"
        id=""
        cols="30"
        rows="10"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.address ? item.address : "Address"}
        value={state.address}
        onChange={changeHandler}
      ></textarea>
      <button className="w-1/2 text-center py-2 bg-purple-700 text-gray-50 rounded-3xl my-2 mx-auto block">
        Set as Primary
      </button>
      <button className="w-full text-center py-2 bg-green-400 text-gray-50 rounded-3xl my-2">
        Save
      </button>
    </div>
  );
}
