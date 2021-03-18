import React, { useState, useEffect, useContext } from "react";
import BillingForm from "./BillingForm";
// import billinginfos from "../../billinginfos.json";
import { UserContext } from "../../pages/_app";
import axios from "axios";

export default function BillingInfos({ use }) {
  const [billingOnFocus, setbillingOnFocus] = useState("");
  const [chosenBilling, setchosenBilling] = useState("");
  const [user, setuser, isLoggedIn, setisLoggedIn] = useContext(UserContext);
  const [billinginfos, setbillinginfos] = useState([]);


  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:4000/user/getbillinginfo",
      headers: { authorization: `Bearer ${user.token}` },
    }).then((res) => {
      if (res.status === 200) {
        setbillinginfos(res.data)
      }
    });
  }, [user]);

  const handleDelete = (val) => {
    axios({
      method: "post",
      url: "http://localhost:4000/user/deletebilling",
      headers: { authorization: `Bearer ${user.token}` },
      data: {
        id: val
      }

    }).then((res) => {
      if (res.status === 200) {

        let temp = billinginfos.filter(i => i._id !== res.data.id)
        setbillinginfos(temp);

      } else {
        console.log(res.data.msg)
      }

    })
  }

  const billingSetter = (type, item) => {
    if (type === "del") {
      const temp = billinginfos;
      const items = temp.filter(i => i._id !== item._id);
      setbillinginfos(items);

    } else {
      const temp = billinginfos;
      temp.push(item);
      setbillinginfos(temp);
      setbillingOnFocus("");

    }



  }

  const billingProvider = (val) => {
    if (val === billingOnFocus) {
      setbillingOnFocus("");
      return;
    }
    setbillingOnFocus(val);
  };
  return (
    <div>
      <div className="w-full text-center border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4">
        BILLING ADRESSES
      </div>
      {billinginfos.length > 0 ? (
        chosenBilling !== "" ?
          <div className="w-full h-full bg-yellow-400 bg-opacity-60 text-center align-middle text-gray-50 rounded-3xl" >
            <h1 className="text-4xl py-8 uppercase">
              {chosenBilling}
            </h1>
            <button className="bg-blue-400 py-2 px-8 my-12 text-xl rounded-3xl" onClick={() => setchosenBilling("")}>EDIT</button>


          </div>


          :
          billinginfos.map((item) => (
            <div>
              <div className="w-full text-center border rounded-3xl flex flex-row justify-around items-center">
                <div className=" justify-self-start w-1/3">
                  <button className=" pl-4  p-2 w-full  rounded-l-3xl bg-purple-700 text-gray-50">
                    {item.primary ? "PRIMARY" : "SECONDARY"}
                  </button>
                </div>
                <div
                  className="justify-self-center w-1/3 text-center text-lg font-semibold cursor-pointer uppercase"
                  onClick={use ? () => setchosenBilling(item.alias) : null}
                >
                  {item.alias}
                </div>
                <div className="justify-self-end  w-1/3  ">
                  <div className="w-full bg-red-400 overflow-hidden rounded-r-3xl ">
                    <button
                      className="bg-yellow-400 p-2 text-gray-50 w-1/2"
                      onClick={() => billingProvider(item._id)}
                    >
                      {billingOnFocus === item._id ? "CANCEL" : "EDIT"}
                    </button>
                    {use ? (
                      <button className="bg-blue-400 p-2 text-gray-50 pr-4 w-1/2 overflow-hidden rounded-r-3xl">
                        USE
                      </button>
                    ) : (
                        <button className="bg-red-400 p-2 text-gray-50 pr-4 w-1/2 overflow-hidden rounded-r-3xl" onClick={() => handleDelete(item._id)}>
                          DELETE
                        </button>
                      )}
                  </div>
                </div>
              </div>
              <div className={billingOnFocus === item._id ? null : "hidden"}>
                <BillingForm item={item} tkn={user.token}
                  setter={billingSetter} />
              </div>
            </div>
          ))
      ) : (
          <h2>You have no billing information yet!</h2>
        )}
      <div
        className="w-full text-center cursor-pointer hover:bg-gray-400 border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4"
        onClick={() => billingProvider("new")}
      >
        ADD +
      </div>
      <div className={billingOnFocus === "new" ? null : "hidden"}>
        <BillingForm
          item={{
            city: "City",
            postcode: "Postcode",
            country: "Country",
            address: "Address",
            name: "Name",
            taxnr: "Tax Number",
          }}
          tkn={user.token}
          setter={billingSetter}
        />
      </div>
    </div>
  );
}
