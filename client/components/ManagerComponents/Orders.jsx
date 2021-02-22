import React from 'react'
import singleOrder from "../../singleOrder.json"
import Order from '../UserComponents/Order'
import OrderDetails from "./OrderDetails"

export default function Orders() {

    return (
        <div>
            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-gray-500 py-4 no-print">
              <div className="w-auto sm:w-1/6 font-bold">Order #</div>
              <div className="w-auto sm:w-1/6 font-bold">Order Date</div>
              <div className="w-auto sm:w-1/6 font-bold">
                Payment/Delivery Type
              </div>
              <div className="w-auto sm:w-1/6 font-bold">Price</div>
              <div className="w-auto sm:w-1/6 font-bold">Status </div>
              <div className="w-auto sm:w-1/6 font-bold"> </div>
            </div>

           {singleOrder.map(item => (


<OrderDetails order={item} />

           ))} 

            
        </div>
    )
}
