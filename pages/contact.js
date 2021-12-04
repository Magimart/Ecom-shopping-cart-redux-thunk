import React from 'react';
import MetaTags from '../components/MetaTags';
import { motion } from "framer-motion";  //____testing
import { UnCoverFromLeft } from '../components/animationComponents/UnCoverFromLeft';
import { ContactPageModel } from '../components/mainComponents/ContactPageModel';




const ContactPage = ({onFirstMount} ) => {


  return (
          <>
            <MetaTags title={"contact magima"}/>

            {onFirstMount &&  <UnCoverFromLeft/>} 
               <section id="contactWrapper" 
                     className="grid grid-flow-col w-100vw h-full                                    
                              relative   bg-green-70                                                      
                          "
                >
                  <ContactPageModel/>
               </section>
          </>
  )
}
export default ContactPage;
  

