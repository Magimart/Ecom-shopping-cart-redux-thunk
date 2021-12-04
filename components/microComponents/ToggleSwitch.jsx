import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";



export default function SwitchToggleBtn({paymentMethod, setPaymentMethod}) {

    const [payment, setPayment] = useState(false)

            const toggleSwitch = (e, Text) => {
                    console.log(e.innerText)
                setPaymentMethod(() =>{
                        if(e && e.innerText){
                        return {
                            ...paymentMethod, id: e.innerText,
                        } 
                        }      
                })

            setPayment(() =>!payment)
    };

  return (
    <div className="switch items-center flex" data-payment={payment} 
          onClick={(e) => toggleSwitch(e.target)}
    >
      <motion.div className="handle" layout transition={spring}
       >
        <div className={`withAcccomodationWrapper relative bg-${!payment? ("blue-400") : ("green-400")}
         w-14 h-14  items-center flex  justify-center rounded-full cursor-pointer
         ring ring-green-600 ring-offset-4 ring-offset-green-100
         left-${!payment? ("") : ("10")}
          `}>
            <p className="text-md text-green-100 ">
                {!payment? ("paypal") : ("stripe")}
            </p>
        </div>
      </motion.div>
      {!payment? (

           <div className="bg-opacity-40 m-4 ">
           <div className={` font-bold text-lg text-green-600 bg-opacity-903 
                         relative l
                         opacity-${!payment? "90" : "0"}
                         ` 
           }>
           {!payment? (<span className="bg-black px-2 py-1 cursor-pointer rounded-r-full">stripe
           <span className="bg-green-900 h-12 absolute top-14 items-center -left-24 flex w-44"> 
           <div className="px-2">
                <label  className="flex items-center cursor-pointer">
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" 
                    className="h-8 ml-3"/>
                </label>
            </div>
           </span>
           </span>) : ("")}
             </div>
           </div>
       ) : ("")
       }
       

       {!payment? (

""
) : (
  <div className="bg-opacity-30 pb-8 ">
<div className={`flex items-center font-bold mx-2 text-lg text-blue-400 bg-opacity-80 
              absolute left-3 pb-5a bg-blac w-fullb h-20n -mt-6n px-1 rounded-full
              opacity-${!payment? "0" : "100"}
              ` 
}>
{!payment? ("") : (<span className="bg-black px-2 py-1 cursor-pointer rounded-l-full">paypal
<span className="bg-green-900 h-12 absolute top-14  -left-3 items-center flex w-max"> 
            <div className="px-2">        
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                     className="h-8 pt-1"/>
            </div>
</span>
</span>)}
  </div>
</div>
)
}

    </div>
    
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};





