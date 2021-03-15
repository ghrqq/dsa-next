import React, { useState, useContext, useEffect } from "react";
import AddressForm from "./AddressForm";
// import addresses from "../../addresses.json";
import { UserContext } from "../../pages/_app";
import axios from "axios";

export default function Adresses({ use }) {
  const [addressOnFocus, setaddressOnFocus] = useState("");
  const [chosenAddress, setchosenAddress] = useState("");
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  const [addresses, setaddresses] = useState([]);
  const [isAddressesLoading, setisAddressesLoading] = useState(false);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:4000/user/getaddresses",
      headers: { authorization: `Bearer ${user.token}` },
    }).then((res) => {
      if (res.status === 200) {
        setaddresses(res.data)
      }
    });
  }, [user]);

  const addressProvider = (val) => {
    if (val === addressOnFocus) {
      setaddressOnFocus("");
      return;
    }
    setaddressOnFocus(val);
  };
  return (
    <div>
      <div className="w-full text-center border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4">
        DELIVERY ADRESSES
      </div>
      {addresses.length > 0 ? (
        chosenAddress !== "" ? (
          <div className="w-full h-full bg-yellow-400 bg-opacity-60 text-center align-middle text-gray-50 rounded-3xl">
            <h1 className="text-4xl py-8 uppercase">{chosenAddress}</h1>
            <button
              className="bg-blue-400 py-2 px-8 my-12 text-xl rounded-3xl"
              onClick={() => setchosenAddress("")}
            >
              EDIT
            </button>
          </div>
        ) : (
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
                    onClick={use ? () => setchosenAddress(item.alias) : null}
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
                  <AddressForm item={item} tkn={user.token} />
                </div>
              </div>
            ))
          )
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
          tkn={user.token}
        />
      </div>
    </div>
  );
}
