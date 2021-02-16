import React, { useState } from "react";
import AddressForm from "./AddressForm";
import addresses from "../../addresses.json";

export default function Adresses({ use }) {
  const [addressOnFocus, setaddressOnFocus] = useState("");

  const addressProvider = (val) => {
    if (val === addressOnFocus) {
      setaddressOnFocus("");
      return;
    }
    setaddressOnFocus(val);
  };
  return (
    <div className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 rounded-3xl mx-auto">
      <div className="w-full text-center border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4">
        DELIVERY ADRESSES
      </div>
      {addresses.length > 0 ? (
        addresses.map((item) => (
          <div>
            <div className="w-full text-center border rounded-3xl flex flex-row justify-around items-center">
              <div className=" justify-self-start w-1/3">
                <button className=" pl-4  p-2 w-full  rounded-l-3xl bg-purple-700 text-gray-50">
                  {item.primary ? "PRIMARY" : "SECONDARY"}
                </button>
              </div>
              <div
                className="justify-self-center w-1/3 text-center text-lg font-semibold cursor-pointer uppercase"
                onClick={use ? () => window.alert("used") : null}
              >
                {item.alias}
              </div>
              <div className="justify-self-end  w-1/3  ">
                <div className="w-full bg-red-400 overflow-hidden rounded-r-3xl ">
                  <button
                    className="bg-yellow-400 p-2 text-gray-50 w-1/2"
                    onClick={() => addressProvider(item.id)}
                  >
                    {addressOnFocus === item.id ? "CANCEL" : "EDIT"}
                  </button>
                  {use ? (
                    <button className="bg-blue-400 p-2 text-gray-50 pr-4 w-1/2 overflow-hidden rounded-r-3xl">
                      USE
                    </button>
                  ) : (
                    <button className="bg-red-400 p-2 text-gray-50 pr-4 w-1/2 overflow-hidden rounded-r-3xl">
                      DELETE
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className={addressOnFocus === item.id ? null : "hidden"}>
              <AddressForm item={item} />
            </div>
          </div>
        ))
      ) : (
        <h2>You have no addresses yet!</h2>
      )}
      <div
        className="w-full text-center cursor-pointer hover:bg-gray-400 border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4"
        onClick={() => addressProvider("new")}
      >
        ADD +
      </div>
      <div className={addressOnFocus === "new" ? null : "hidden"}>
        <AddressForm
          item={{
            city: "City",
            postcode: "Postcode",
            country: "Country",
            address: "Address",
            name: "Name",
          }}
        />
      </div>
    </div>
  );
}