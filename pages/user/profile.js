import React, { useContext, useState, useEffect } from "react";
import Layout from "../../themes/Layout";
import { UserContext } from "../_app";

import Addresses from "../../components/UserComponents/Adresses";
import BillingInfos from "../../components/UserComponents/BillingInfos";

export default function profile() {
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  const [state, setstate] = useState({});

  const [isMailsAllowed, setisMailsAllowed] = useState(true);

  //   useEffect(() => {
  //     setstate(user);
  //     console.log("effect F fired");
  //   }, [user]);

  const changeHandler = (e) => {
    let val = e.target.value;
    let nam = e.target.name;

    let temp = state;

    temp[nam] = val;

    console.log(temp);

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

  return (
    <Layout>
      <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-stretch space-x-4 my-4">
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 ">
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl py-2 px-4 text-gray-900 "
            placeholder={user.name ? user.name : "Name"}
            value={state.name}
            name="name"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl py-2 px-4 text-gray-900 "
            placeholder={user.surname ? user.surname : "Surname"}
            value={state.surname}
            name="surname"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl py-2 px-4 text-gray-900 "
            placeholder={user.mail ? user.mail : "E-mail"}
            value={state.mail}
            name="mail"
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl py-2 px-4 text-gray-900 "
            placeholder="New Password"
            name="password"
            value={state.password}
            onChange={changeHandler}
          />
          <div className="flex flex-row flex-wrap justify-center items-center ">
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
          </div>
          <div className="my-2 text-center w-1/2 mx-auto">
            <button className="w-full bg-green-400 rounded-3xl text-gray-100 text-xl px-2">
              Save Changes
            </button>
          </div>
        </div>

        {/* <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 ">
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder={user.city ? user.city : "City"}
            name="city"
            value={state.city}
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder={user.postcode ? user.postcode : "Postcode"}
            name="postcode"
            value={state.postcode}
            onChange={changeHandler}
          />
          <input
            type="text"
            className="w-full mx-auto my-2 focus:outline-none focus:shadow-inner shadow-2xl rounded-3xl p-2 text-gray-900"
            placeholder={user.country ? user.country : "Country"}
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
            placeholder={user.address ? user.address : "Address"}
            value={state.address}
            onChange={changeHandler}
          ></textarea>
        </div> */}
      </div>
      <div className="flex flex-row flex-wrap justify-center items-stretch">
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 rounded-3xl mx-auto">
          <Addresses />
        </div>
        <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 rounded-3xl mx-auto">
          <BillingInfos />
        </div>
      </div>
    </Layout>
  );
}
