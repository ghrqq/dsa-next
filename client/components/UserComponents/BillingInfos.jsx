import React, { useState } from "react";
import BillingForm from "./BillingForm";
import billinginfos from "../../billinginfos.json";

export default function BillingInfos({ use }) {
  const [billingOnFocus, setbillingOnFocus] = useState("");
  const [chosenBilling, setchosenBilling] = useState("");

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
                 <button className="bg-blue-400 py-2 px-8 my-12 text-xl rounded-3xl" onClick={()=> setchosenBilling("")}>EDIT</button>
        
        
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
                    onClick={() => billingProvider(item.id)}
                  >
                    {billingOnFocus === item.id ? "CANCEL" : "EDIT"}
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
            <div className={billingOnFocus === item.id ? null : "hidden"}>
              <BillingForm item={item} />
            </div>
          </div>
        ))
      ) : (
        <h2>You have no billing addresses yet!</h2>
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
        />
      </div>
    </div>
  );
}
