import React, {useState} from 'react'
import methods from "../methods.json";

export default function Methods({method}) {
  const [methodOnFocus, setmethodOnFocus] = useState("");
  const [chosenMethod, setchosenMethod] = useState(""); //TODO: Item price will be added to the state & display.

  const methodProvider = (val) => {
    if (val === methodOnFocus) {
      setmethodOnFocus("");
      return;
    }
    setmethodOnFocus(val);
  };

    return (
        <div>
          <div className="w-full text-center border rounded-3xl py-2 text-xl font-semibold flex flex-row justify-around items-center my-4">
        {method === "delivery" ? " DELIVERY METHOD: " : "PAYMENT METHOD:"}
        </div>
       {chosenMethod !== "" ?  
       <div className="w-full h-full bg-yellow-400 bg-opacity-60 text-center align-middle text-gray-50 rounded-3xl" >
        <h1 className="text-4xl py-8">
          {chosenMethod}
          </h1> 
         <button className="bg-blue-400 py-2 px-8 my-12 text-xl rounded-3xl" onClick={()=> setchosenMethod("")}>EDIT</button>


         </div>
       
       
       : 
       
        method === "delivery" ? (
          methods[0].delivery.map((item) => (
            <div>
       
              <div className="w-full text-center border rounded-3xl flex flex-row justify-around items-center">
              <div className=" justify-self-start w-1/3">
                <button className=" pl-4  p-2 w-full  rounded-l-3xl bg-purple-700 text-gray-50">
                  {item.price}
                </button>
              </div>
                <div
                  className="justify-self-center w-1/3 text-center text-lg font-semibold cursor-pointer uppercase"
                  onClick={() => setmethodOnFocus(item.type)}
                >
                  {item.type}
                </div>
                <div className="justify-self-end  w-1/3  ">
                  <div className="w-full bg-red-400 overflow-hidden rounded-r-3xl ">
                   
                    
                      <button className="bg-blue-400 p-2 text-gray-50 pr-4 w-full overflow-hidden rounded-r-3xl" onClick={()=> setchosenMethod(item.type)}>
                        CHOOSE
                      </button>
                   
                  </div>
                </div>
              </div>
              <div className={methodOnFocus === item.type ? null : "hidden"}>
                <div className="flex flex-col justify-center items-stretch">
                  <div>{item.duration}</div>
                  <div>{item.explanation}  </div>
                  <div>{item.price} </div>
                   <button disabled={!item.available} onClick={() => window.alert(item.type)}>Choose</button> 

                </div>
              </div>
            </div>
          ))
        ) : (
          methods[0].payment.map((item) => (
            <div>
              <div className="w-full text-center border rounded-3xl flex flex-row justify-around items-center">
              <div className=" justify-self-start w-1/3">
                <button className=" pl-4  p-2 w-full  rounded-l-3xl text-gray-50">
                   
                </button>
              </div>
                <div
                  className="justify-self-center w-1/3 text-center text-lg font-semibold cursor-pointer uppercase"
                  onClick={() => setmethodOnFocus(item.type)}
                >
                  {item.type}
                </div>
                <div className="justify-self-end  w-1/3  ">
                  <div className="w-full bg-red-400 overflow-hidden rounded-r-3xl ">
                    
                    
                      <button className="bg-blue-400 p-2 text-gray-50 pr-4 w-full overflow-hidden rounded-r-3xl" onClick={()=> setchosenMethod(item.type)} >
                        CHOOSE
                      </button>
                   
                  </div>
                </div>
              </div>
              <div className={methodOnFocus === item.type ? null : "hidden"}>
                <div className="flex flex-col justify-center items-stretch">
                  <div>{item.duration}</div>
                  <div>{item.explanation}  </div>
                  <button disabled={!item.available} onClick={() => window.alert(item.type)}>Choose</button>                   

                </div>
              </div>
            </div>
        )))}
        
        
      </div>
    )
}
