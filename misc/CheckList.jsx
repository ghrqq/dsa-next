import React from 'react'

export default function CheckList({info}) {
    const {id, userid, date, currency, total, payment, delivery, status, items, approved, deliveryInfo, billingInfo, paymentStatus} = info;

    const quantitiyCalc = () => {
        let val = 0;
        items.forEach((item) => {
          val += item.quantity ;
        });

        return val;
    }
    const totalCalc = () => {
        let val = 0;
        items.forEach((item) => {
          val += item.quantity * item.price ;
        });

        return val;
    }

    return (
        <div className="print">
            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-gray-200 py-4 ">
            <div className="w-1/6">Order # : {id}</div>
                <div className="w-1/6">{date}</div>
                <div className="w-1/6">Order: {approved ? "Approved" : "Waiting for approval"}</div>
                <div className="w-1/6">Payment: {paymentStatus}</div>
                <div className="w-1/6">Customer: {userid}</div>
                <div className="w-1/6"> {payment} / {delivery}
                
              </div>
                
            </div>

            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-white py-4 border-t-2 border-solid border-gray-900 ">

<div className="border w-1/3">Delivery Address: <br/>
{deliveryInfo}

</div>
<div className="border w-1/3">Billing Info: <br/>
{billingInfo}

</div>
</div>
            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-gray-200 py-4 ">
              <div className="w-1/6 font-bold">Item #</div>
              <div className="w-1/6 font-bold">Category/ <br/>
              Subcategory</div>
              
              <div className="w-1/6 font-bold">Price </div>
              <div className="w-1/6 font-bold">Quantity</div>
              <div className="w-1/6 font-bold"> Total</div>
            </div>
                {items.map(item => (
            <div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-white py-4 ">
                    <div className="w-1/6">{item.code}</div>
                    <div className="w-1/6">{item.category}/{item.subcategory}</div>
                    <div className="w-1/6">{item.price}</div>
                    <div className="w-1/6">{item.quantity}</div>
                    <div className="w-1/6">{Number(item.quantity * item.price).toFixed(2) }</div>
                    <div className="w-1/12 h-12 border-2 border-gray-900 border-solid"> </div>

                </div>
                ))}

<div className="w-5/6 mx-auto flex flex-row flex-wrap justify-evenly items-center cursor-pointer bg-white py-4 border-t-2 border-solid border-gray-900 ">
                    <div className="w-1/6">Total Different Items 
                    
                    </div>
                    <div className="w-1/6">{items.length}</div>
                    <div className="w-1/6">Total Quantity</div>
                    <div className="w-1/6">{quantitiyCalc()}</div>
                    <div className="w-1/6">Total Price <br/>{totalCalc()}{currency}</div>
                    <div className="w-1/12 h-12 border-2 border-gray-900 border-solid"> </div>

                </div>
              

            
        </div>
    )
}
