import React, {useState, useEffect} from 'react';
import MetaTags from '../components/MetaTags';
import { getSession } from "next-auth/client";
import LoginModel from '../components/authComponents/LoginPageModel';
import BackgroundHome from "../components/BackgroundHome";
import {UnCoverFromLeft} from '../components/animationComponents/UnCoverFromLeft';




 const LoginPage = ({onFirstMount } ) => {


  return (
           <>
              <MetaTags title={"login to magima"}/>
                {onFirstMount && <BackgroundHome/>} 
                      <UnCoverFromLeft/>
                    <section id="contactWrapper"
                             className="grid grid-flow-col w-100vw h-screen                                     
                                  bg-yellow-600  bg-opacity-60                                                     
                                 ">
                        <LoginModel/> 
                    </section>
           </>
  )
};
export default  LoginPage;


export const getServerSideProps = async(context) => {

  const session = await getSession({ req: context.req })

      if(session ){ 
        console.log(session)
         return {
               redirect: {
                       destination: "/",
                       permanent: false
                }
        }
      }
      return {
        props: {}
      }

}



