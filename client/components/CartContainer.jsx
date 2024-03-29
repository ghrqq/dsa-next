import React, { useState, useContext, useEffect } from "react";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm"
import items from "../items.json";
import { CartContext, ConfigContext, UserContext } from "../pages/_app";

export default function CartContainer({ stepper }) {
  const [total, settotal] = useState(0);
  const [cart, setcart, cartAdder, cartLength, setcartLength] = useContext(
    CartContext
  );
  const [step, setstep] = useState(0);

  const [lang, setlang, currency, setcurrency, rate] = useContext(
    ConfigContext
  );

  const [user, setuser] = useContext(UserContext);
  // To collect statistical information
  const [count, setcount] = useState(0);

  const handleCartEmpty = () => {
    setcart([]);
    setcartLength(0);
  };

  // Disabler of the "ORDER" button according to steps.
  const disabled =() => {
if(step === 0 && cartLength < 1){
  return true;
}
if(step === 1 ){
  return true;
}

  }

  useEffect(() => {
    let val = 0;
    cart.forEach((item) => {
      val += item.quantity * item.price;
    });

    settotal(val.toFixed(2));
  }, [count, cart]);

  const adder = (code, qty) => {
    let tempArr = cart;
    let index = tempArr.indexOf(
      tempArr.filter((item) => item.code === code)[0]
    );
    tempArr[index].quantity = qty;

    setcart(tempArr);
    setcount(count + 1);
  };

  const componentProvider = () => {
    if (step === 0) {
      return (<div className="w-9/12 mr-4 h-96 overflow-scroll p-8 bg-gray-50 ">
      {cartLength <= 0 ? (
        <div> Cart is empty! </div>
      ) : (
        cart.map((item) => {
          return (
            <CartItem
              count={true}
              key={item.code}
              item={item}
              calc={adder}
              sale={user.sale}
            />
          );
        })
      )}
    </div>)
    }
    if (step === 1) {
      return <OrderForm />;
    }
  };

  return (
    <div className="w-full h-auto min-h-screen opacity-100 z-50   bg-gray-600 bg-opacity-60 mx-auto  sm:absolute sm:right-0 top-auto flex flex-col justify-around items-end">
      <div className="w-9/12 bg-gray-600 text-gray-50 text-right mr-4 p-4 pr-8"> Step {step+1}/3 </div>
      {componentProvider()}
      <div className="flex flex-col sm:flex-row justify-between w-9/12 mr-4 items-center sm:mb-96 bg-gray-600 text-center">
        <div className="flex flex-col sm:flex-row justify-start items-center w-full">
          <div className="flex flex-col justify-evenly items-center w-36 px-2">
            <div
              className="bg-red-400 w-full text-gray-100 px-2 py-1 rounded-full my-1"
              onClick={() => handleCartEmpty()}
            >
              EMPTY CART
            </div>
            <div className="bg-green-400 w-full text-gray-100 px-2 py-1 rounded-full my-1" onClick={() => setstep(step-1)} >
              SAVE
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between my-4 items-center">
          <div className="text-gray-100 mr-4 my-2 text-3xl">
            {currency === "USD"
              ? Number(total / rate - (total / rate) * user.sale).toFixed(2)
              : Number(total - total * user.sale).toFixed(2)}{" "}
            {currency === "USD" ? "USD" : "UAH"}
          </div>
         {disabled() ? 
         
<button
            className="bg-gray-400 h-full my-2 mr-4 text-2xl text-gray-100 px-10  py-2 rounded-full"
            disabled={true}
            onClick={() => setstep(+1)}
          >
            ORDER
          </button>

         :
         <button
            className="bg-green-400 h-full my-2 mr-4 text-2xl text-gray-100 px-10  py-2 rounded-full"
            onClick={() => setstep(+1)}
          >
            ORDER
          </button>}
        </div>
      </div>
    </div>
  );
}
