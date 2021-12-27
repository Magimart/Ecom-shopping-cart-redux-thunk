import { motion } from "framer-motion";  //____testing


export const UnCoverPage = () => {

    const slideUP = {
        initial: {
          height: "60vh",
        },
        animate: {
          height: 0,
          top: 0,
        //   position: 'absolute', //------------test
          transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
            zIndex: 99
          },
        },
      };

      const slideDown = {
        initial: {
          height: "-10vh",
        },
        animate: {
          height: 0.00001,
          bottom: 0,
          zIndex: 100,
        //   position: 'absolute', //------------test
          transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
          },
        },
      };

    const defaultPageTitle = {
        pageTitile:'magima',
        description: 'welcome to ma home'
    }

    return (
        <>
                <motion.div exit={{ opacity: 0 }} className="unCoverProject   fixed bg-black w-screen h-screen
                                     
                                    "  
               >
                
               </motion.div>
        </>
    )
}

