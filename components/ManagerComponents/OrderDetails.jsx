import React, {useState} from 'react'
import CheckList from '../../misc/CheckList';

export default function OrderDetails({order}) {
const [isExpand, setisExpand] = useState(false)
const [orderState, setorderState] = useState(order)
const [count, setcount] = useState(0);
const [isPrint, setisPrint] = useState(false)


const handleChange = (code, e) => {
let temp = orderState;
let val = e.target.value;
let index = temp.items.indexOf(temp.items.filter(item => item.code === code)[0]);
temp.items[index].quantity = val;
setcount(count +1 )
setorderState(temp) 


}

const handleSave = () => {
    window.alert("saved");
}

const handleApprove = () => {
    let temp = orderState;
    temp.approved = !orderState.approved;
    setcount(count +1)
    setorderState(temp)
}

const handleStatus = (e) => {
    let temp = orderState;
    let val = e.target.value;
    temp.status = val;
    setcount(count + 1);
    setorderState(temp)

}
const handlePaymentStatus = (e) => {
    let temp = orderState;
    let val = e.target.value;
    temp.paymentStatus = val;
    setcount(count + 1);
    setorderState(temp)

}

const handlePrint = () => {
    setisPrint(!isPrint);
setTimeout(() => {
    window.print();
    
}, 500);

}

const {id, userid, date, currency, total, payment, delivery, status, items, approved, deliveryInfo, billingInfo, paymentStatus} = orderState;

    return (
        <div>
            <div className="w-5/6 mx-auto flex flex-col sm:flex-row  justify-evenly items-center cursor-pointer border bg-gray-400 no-print">
            <div className="" >{id}</div>
            <div className="" >{userid}</div>
            <div className="" >{date}</div>
            <div className="" >{total}{currency}</div>
            <div className={
                      paymentStatus === "approved"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-green-400"
                        : paymentStatus === "pending"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-yellow-400"
                        : paymentStatus === "canceled"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-red-400"
                        : paymentStatus === "on delivery"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-purple-700"
                        : null
                    } > {paymentStatus}</div>
            
            <div
                    className={
                      status === "delivered"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-green-400"
                        : status === "preparing"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-yellow-400"
                        : status === "canceled"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-red-400"
                        : status === "courrier"
                        ? " px-2 rounded-3xl text-center text-gray-50 bg-purple-700"
                        : null
                    }
                  >
                    {status}{" "}
                  </div>
            <div className="" > {!approved ? <div className="bg-red-300 w-full text-gray-50 rounded-3xl px-2">Waiting</div> : <div className="bg-green-300 w-full text-gray-50 rounded-3xl px-2">Approved</div>}</div>
            <div className="" >{payment}</div>
            <div className="" >{delivery}</div>
            <button onClick={() => setisExpand(!isExpand)}>Expand</button>
            
            


                      
            </div>


<div className={isExpand ? "no-print" : "hidden no-print"}>
    <div className="flex flex-col w-5/6 justify-evenly bg-gray-300 items-center text-left mx-auto ">
    <div className="w-full  mx-auto py-2 flex flex-row justify-evenly items-stretch border-b-2 border-gray-500 border-solid">
    <div className="w-1/5">Code</div>
    <div className="w-1/5">Category/Subcategory</div>
   
    <div className="w-1/5">Price</div>
    <div className="w-1/5 text-center">
   Quantity
        </div>
   
    <div className="w-1/5">Total</div>
    
   


    </div>

    {items.map(item => (

<div className="w-full  mx-auto flex flex-row justify-evenly items-stretch no-print">
    <div className="w-1/5">{item.code}</div>
    <div className="w-1/5">{item.category}/{item.subcategory}</div>
   
    <div className="w-1/5">{item.price}</div>
    <div className="w-1/5 flex flex-row justify-evenly items-center">
    <input className="w-1/3 mx-auto text-center" type="number" disabled={orderState.approved} placeholder={item.quantity} onChange={(e) => handleChange(item.code, e)} />
    
        </div>
   
    <div className="w-1/5">{Number(item.quantity * item.price).toFixed(2) }</div>
    
   


    </div>

        
        ))}


        <div className="w-full flex flex-row justify-evenly items-center text-center">
<div className="border w-1/3">
    Delivery Info <br />
    {deliveryInfo}
</div>
<div className="border w-1/3">
    Billing Info<br />
{billingInfo}
</div>


        </div>

    <div className={count > 0 ? "bg-red-400 w-full " : "hidden"}>
        You have made some changes on order. Please double check and save them. 
    </div>

{/* Button Box */}
    <div className="flex flex-row justify-evenly items-center no-print">
    <button className="bg-indigo-400 px-4 py-2 my-2 mx-2 rounded-xl text-center text-gray-50" onClick={handlePrint} > PRINT CHECKLIST</button>
    <button className="bg-indigo-400 px-4 py-2 my-2 mx-2 rounded-xl text-center text-gray-50">PRINT BILL</button>

    <div className="inline-block text-center text-xs">
        Order Status <br />
        {
            orderState.approved ?  <button onClick={handleApprove} className="bg-yellow-400 px-4 py-2 my-2 mx-2 rounded-xl text-center text-gray-50">EDIT</button>
            :
            <button onClick={handleApprove} className="bg-green-400 px-4 py-2 my-2 rounded-xl text-center text-gray-50">APPROVE ORDER</button>
        }
    </div>

    <div className="inline-block text-center text-xs">
        Payment Status <br />
<select className="rounded-xl px-4 py-2 my-2 mx-2 inline-block" onChange={(e) =>  handlePaymentStatus(e)}>
<option value="pending">pending</option>
<option value="canceled">canceled</option>
<option value="approved">approved</option>
<option value="on delivery">on delivery</option>

</select>

    </div>
    <div className="inline-block text-center text-xs">
        Delivery Status <br />
<select className="rounded-xl px-4 py-2 my-2 mx-2 inline-block" onChange={(e) =>  handleStatus(e)}>
<option value="delivered">delivered</option>
<option value="canceled">canceled</option>
<option value="preparing">preparing</option>
<option value="courrier">courrier</option>

</select>

    </div>
    <button onClick={handleSave} className="bg-blue-400 px-4 py-2 my-2 mx-2 rounded-xl text-center text-gray-50">SAVE</button>
        </div>

        {/* End of Button Box */}

</div>
        </div>
        { isPrint ?  
        
<CheckList info={orderState} />
:
null
        
        }
        </div>
    )
}
