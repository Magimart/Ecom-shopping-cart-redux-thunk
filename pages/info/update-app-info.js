
import React, {useState, useEffect} from 'react';
import MetaTags from '../../components/MetaTags';
import { motion } from "framer-motion";  //____testing
import axios from 'axios';
import { useRouter } from 'next/router'
import {UnCoverPage} from '../../components/animationComponents/UnCoverPage';
import { UpdateAppInfoModule } from '../../components/mainComponents/UpdateAppInfo';




const PublishAppInfo = () => {


  return (
          <>
              <MetaTags title={"add info"}/>

                 <UnCoverPage/>
                <section id="contactWrapper" 
                         className="grid grid-flow-col w-100vw h-full                                   
                                  bg-green-70                                                       
                                "
                >
                  <UpdateAppInfoModule/>
                </section>

          </>
  )
}
export default PublishAppInfo;
  


