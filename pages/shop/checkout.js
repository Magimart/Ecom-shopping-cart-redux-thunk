
import React  from "react";
// import { UnCoverPage } from "../components/animationComponents/UnCoverPage";
import { ViewportProvider } from "../../utils/helpers/ViewPortWindow";
import AboutPageModel from "../../components/mainComponents/AboutPageModel";
import { CheckoutPageModel } from "../../components/mainComponents/shop/Checkout";
// import { dbConnect } from "../config";
// import Info from "../models/pageInfo";




const CheckoutPage = ({ currentPage, onFirstMount, allPathNames}) =>  {
  // console.log(infos)
  return (
   <>
     {/* <UnCoverPage/> */}
     <ViewportProvider>
       <div  className="grid  m-0 p-0 col-span-12  h-100vh bg-yellow-400 bg-opacity-10               
                    "
        >
            <CheckoutPageModel/>
       </div> 

   </ViewportProvider>
     </>
  );

}

export default CheckoutPage;



