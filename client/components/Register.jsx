import React, { useState } from "react";
import axios from "axios";

export default function Register({ regHandler }) {
  const [state, setstate] = useState({});
  const [isAgreed, setisAgreed] = useState(true);
  const [isMailsAllowed, setisMailsAllowed] = useState(true);

  const changeHandler = (e) => {
    let val = e.target.value;
    let nam = e.target.name;

    let temp = state;

    temp[nam] = val;

    setstate(temp);
  };

  const checkBoxHandler = (e) => {
    let nam = e.target.name;
    if (nam === "isAgreed") {
      setisAgreed(!isAgreed);
      return;
    }
    if (nam === "isMailsAllowed") {
      setisMailsAllowed(!isMailsAllowed);
      return;
    }
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/register",
      data: state,
    }).then((res) => {
      if (res.status === 200) {
        window.alert(res.data.msg);
        regHandler();
        setstate({});
      }
    });
  };

  return (
    <div className="w-full h-auto bg-yellow-300 ">
      <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-stretch space-x-4">
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 ">
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="name"
            value={state.name}
            name="name"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="surname"
            value={state.surname}
            name="surname"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="email"
            value={state.email}
            name="email"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
          />
          <div className="flex flex-row flex-wrap ">
            <div className="my-2 text-center w-1/2">
              Preferred Language: <br />
              <label className=" align-middle p-2" htmlFor="english">
                English
                <input
                  type="radio"
                  value="en"
                  onChange={changeHandler}
                  name="lang"
                  id="english"
                />
              </label>
              <label className=" align-middle p-2" htmlFor="russian">
                Russian
                <input
                  type="radio"
                  value="ru"
                  onChange={changeHandler}
                  name="lang"
                  id="russian"
                />
              </label>
            </div>
            <div className="my-2 text-center w-1/2">
              Preferred Currency: <br />
              <label className=" align-middle p-2" htmlFor="UAH">
                UAH
                <input
                  type="radio"
                  value="UAH"
                  onChange={changeHandler}
                  name="currency"
                  id="UAH"
                />
              </label>
              <label className=" align-middle p-2" htmlFor="USD">
                USD
                <input
                  type="radio"
                  value="USD"
                  onChange={changeHandler}
                  name="currency"
                  id="USD"
                />
              </label>
            </div>
            <div className="my-2 text-center w-1/2">
              <label className=" align-middle p-2" htmlFor="agreement">
                I agree user Agreement. <br />
                <input
                  type="checkbox"
                  name="isAgreed"
                  value={isAgreed}
                  onChange={changeHandler}
                  onClick={checkBoxHandler}
                  id="agreement"
                />
              </label>
            </div>
            <div className="my-2 text-center w-1/2">
              <label className=" align-middle p-2" htmlFor="mail">
                I want to receive occasional mails. <br />
                <input
                  type="checkbox"
                  name="isMailsAllowed"
                  value={isMailsAllowed}
                  onChange={changeHandler}
                  onClick={checkBoxHandler}
                  id="mail"
                />
              </label>
            </div>
            <div className="my-2 text-center w-1/2 mx-auto">
              <button
                className="w-full bg-green-400 rounded-3xl text-gray-100 text-xl px-2"
                disabled={isAgreed}
                onClick={handleSubmit}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 ">
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="city"
            name="city"
            value={state.city}
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="postcode"
            name="postcode"
            value={state.postcode}
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder="country"
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
            placeholder="address"
            value={state.address}
            onChange={changeHandler}
          ></textarea>
        </div> */}
      </div>
    </div>
  );
}
