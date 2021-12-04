import React, {useState, useEffect} from 'react';
import MetaTags from '../components/MetaTags';
import { getSession } from 'next-auth/client'
import RegisterUserModel from '../components/authComponents/RegisterUser';
import BackgroundHome from "../components/BackgroundHome";
import { UnCoverPage } from '../components/animationComponents/UnCoverPage';



 const RegisterPage = ({onFirstMount} ) => {



  return (
           <>
              <MetaTags title={"register with magima"}/>
              {onFirstMount && <BackgroundHome/>} 

                 <UnCoverPage/>
                    <section id="contactWrapper"
                             className="grid grid-flow-col w-100vw h-screen                                     
                                  bg-yellow-600  bg-opacity-60                                                     
                                 ">
                            <RegisterUserModel />
                    </section>
           </>
  )
};
export default  RegisterPage;



export async function getServerSideProps(context) {

   const session = await getSession({ req: context.req })

   if (session) {
       return {
           redirect: {
               destination: '/',
               permanent: false
           }
       }
   }

   return {
       props: {}
   }

}








