import React, { useState } from "react";
import Adresses from "./UserComponents/Adresses";
import BillingInfos from "./UserComponents/BillingInfos";
import Methods from "./Methods";

export default function OrderForm({ stepper }) {
  const [options, setoptions] = useState({
    paymentMethod: "Choose payment option",
    deliveryMethod: "Choose delivery option",
    billingInfo: "Choose",
    deliveryInfo: "Choose",
  });

  const [boxState, setboxState] = useState({
    paymentOpts: true,
    deliveryOpts: true,
    billingInfo: true,
    deliveryInfo: true,
  });

  return (
   
      <div className=" flex flex-col md:flex-row flex-wrap justify-evenly items-stretch w-9/12 mr-4  overflow-scroll overflow-x-hidden p-2 bg-gray-50 ">
        <div className="w-4/5 md:w-2/5 border">
          <BillingInfos use={true} />
        </div>
        <div className="w-4/5 md:w-2/5 border">
          <Adresses use={true} />
        </div>
        <div className="w-4/5 md:w-2/5 border">
          <Methods method="delivery" />
        </div>
        <div className="w-4/5 md:w-2/5 border">
          <Methods  />
        </div>
      </div>
    
    
  );
}
