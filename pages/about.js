import React  from "react";
import { enterFromLeftSmall,animateFromTop,
       animateFromRight,enterFromRight, 
       enterFromLeft,
        animateFromLeft,enterFromLeftBig, bounceUpDownFromDown
      } from "../utils/animations/animate";
import { UnCoverPage } from "../components/animationComponents/UnCoverPage";
import { ViewportProvider } from "../utils/helpers/ViewPortWindow";
import AboutPageModel from "../components/mainComponents/AboutPageModel";
import { fromUpSlow, fromUp } from "../utils/animations/animateUpDown";
// import { dbConnect } from "../config";
// import Info from "../models/pageInfo";




const MagimaPage = ({ currentPage, onFirstMount, allPathNames}) =>  {
  // console.log(infos)
  return (
   <>
     <UnCoverPage/>
     <ViewportProvider>
       <div  className="grid  m-0 p-0 col-span-12  h-100vh bg-yellow-400 bg-opacity-60               
                    "
        >
         <AboutPageModel
             allPathNames={allPathNames}
             animateFromRight={animateFromRight}
             fromUpSlow={fromUpSlow}
             enterFromLeft={enterFromLeft}
             enterFromRight={enterFromRight}
             //  setToggleOnClick={setToggleOnClick}
             fromUp={fromUp}
             enterFromLeftSmall={enterFromLeftSmall}
             animateFromTop={animateFromTop}
             currentPage={currentPage}
             onFirstMount={onFirstMount}
             enterFromLeftBig={enterFromLeftBig}
             bounceUpDownFromDown={bounceUpDownFromDown}
          />
       </div> 

   </ViewportProvider>
     </>
  );

}

export default MagimaPage;



// export async function getServerSideProps(context) {
//   dbConnect();

// try{
//    const data = await Info.find({}).exec();
//     const siteInfo = JSON.parse(JSON.stringify(data));

//       console.log(siteInfo)
//       return {
//                props: {
//                      infos: siteInfo,
//                },
//        };
// }catch(error){
//         console.error(error.message);
// }

// }


