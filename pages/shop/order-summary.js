import React  from "react";
// import { UnCoverPage } from "../components/animationComponents/UnCoverPage";
import { ViewportProvider } from "../../utils/helpers/ViewPortWindow";
import { OrderSummaryPageModel } from "../../components/mainComponents/shop/OrderSummary";



const OrderSummaryPage = () =>  {
  return (
   <>
     {/* <UnCoverPage/> */}
     <ViewportProvider>
       <div  className="grid  m-0 p-0 col-span-12  h-100vh bg-yellow-400 bg-opacity-10               
                    "
        >
            <OrderSummaryPageModel/>
       </div> 

   </ViewportProvider>
     </>
  );

}

export default OrderSummaryPage;