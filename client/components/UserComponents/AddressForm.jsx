import React, { useState } from "react";
import axios from "axios";

export default function AddressForm({ item, tkn }) {
  const [state, setstate] = useState({});

  const changeHandler = (e) => {
    let val = e.target.value;
    let nam = e.target.name;

    let temp = state;

    temp[nam] = val;

    setstate(temp);
  };
  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/user/createnewaddress",
      headers: { authorization: `Bearer ${tkn}` },
      data: state,
    }).then((res) => {
      console.log(res)
    });
  }

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
        placeholder={item.city ? item.city : "City"}
        name="city"
        value={state.city}
        onChange={changeHandler}
      />
      <input
        type="text"
        className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
        placeholder={item.alias ? item.alias : "Alias"}
        name="alias"
        value={state.alias}
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
      <button className="w-1/2 text-center py-2 bg-purple-700 text-gray-50 rounded-3xl mx-auto my-2 block">
        Set as Primary
      </button>
      <button className="w-full text-center py-2 bg-green-400 text-gray-50 rounded-3xl my-2" onClick={() => handleSubmit()}>
        Save
      </button>
    </div>
  );
}
