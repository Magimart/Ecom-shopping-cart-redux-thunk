import React  from "react";
import { enterFromLeftSmall,animateFromTop,
       animateFromRight,enterFromRight, 
       enterFromLeft,
        animateFromLeft,enterFromLeftBig, bounceUpDownFromDown
      } from "../../utils/animations/animate";
import { UnCoverPage } from "../../components/animationComponents/UnCoverPage";
import { ViewportProvider } from "../../utils/helpers/ViewPortWindow";
import ShopItemsModel from "../../components/mainComponents/shop/ShopItemsModel";



const ShopPage = ({ currentPage, onFirstMount, allPathNames}) =>  {
  // console.log(infos)
  return (
   <>
     <UnCoverPage/>
     <ViewportProvider>
       <div  className="grid  m-0 p-0 col-span-12  h-100vh bg-yellow-400 bg-opacity-60               
                    "
        >
            <ShopItemsModel/>
       </div> 

   </ViewportProvider>
     </>
  );

}

export default ShopPage;