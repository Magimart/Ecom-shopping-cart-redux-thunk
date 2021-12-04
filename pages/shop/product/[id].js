import {motion} from "framer-motion";  //____testing
import React from "react";
import BackgroundHome from "../../../components/BackgroundHome";
// import { animateFromRight, enterFromLeft, animateFromLeft } from '../../../utils/animations/animate';
import { wrapper } from "../../../redux/store";
import { getProductDetails } from "../../../redux/actions/productActions";
import ProductDetailsPage from "../../../components/mainComponents/shop/ProductDetailsPage";




export default function productDetailsPage () {


  return (

  <>

           <motion.section exit={{ opacity: 0 }}>
               <div id="HomeMwrapper"  
                    className="z-1 m-0 p-0 relative h-screen
                     "
                >
                    <BackgroundHome/>
                    <ProductDetailsPage
                        // animateFromRight={ animateFromRight} 
                        // enterFromLeft={ enterFromLeft } 
                        // animateFromLeft={ animateFromLeft }
                    />  
                 </div>  
         </motion.section>

  </>

  )
}

    export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
          
      console.log("here are the params request")                 
       console.log(params.id) 
      console.log(store)               
     await store.dispatch(getProductDetails(req, params.id))
  })

