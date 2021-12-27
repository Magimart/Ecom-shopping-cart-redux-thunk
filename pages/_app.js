import '../styles/globals.css';
import '../styles/index.scss';  
import Layout from '../components/layoutComponents/Layout';
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { wrapper } from '../redux/store'
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { staggernateContentDelayed } from '../utils/animations/staggernate';


function MyApp({ Component, pageProps, router }) {

  const store = useStore((state) => state);


  const [onFirstMount, setOnFirstMount] = useState(true);
  const [currentLink, setCurrentLink] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [loading, setloading] = useState(true);
  const [reLoadDelay, setReLoadDelay] = useState(null);


  const [allPathNames, setAllPathName] = useState([
    {pageName: "home", pathName: "/" },
    {pageName: "projects", pathName: "/projects"},
    {pageName: "about", pathName: "/about" },
    {pageName: "let's connect", pathName: "/contact"},
    // {pageName: "shop", pathName: "/shop"}
   ]);


   const currentRoute = useRouter();
      const myPath = currentRoute.pathname;

        useEffect(() => {
          setCurrentLink(() => allPathNames.filter((pathname, index) => {
            return pathname.pathName === router.pathname 
            }
            ));
            setCurrentPage(() => currentRoute.pathname)
                       setloading(false); 

        }, [myPath, currentPage]);


     useEffect(() => {
          const handleRouteChange = () => {
             onFirstMount && setOnFirstMount(false);
           };
        
                router.events.on("routeChangeStart", handleRouteChange);

          return () => {
                router.events.off("routeChangeStart", handleRouteChange);
          };

      }, [ ]);

      return process.browser ? (
          <>
            {/* <PersistGate persistor={store.__persistor} loading={ <div>Loading</div> }> */}
            <PersistGate persistor={store.__persistor} loading={""}>  
              <Layout allPathNames={allPathNames}
                      currentPage={currentPage}
                      loading={loading}
                      reLoadDelay={reLoadDelay}
                      onFirstMount={onFirstMount}
                      staggernateContentDelayed={staggernateContentDelayed}
                      >
                <AnimatePresence exitBeforeEnter>
                  <Component
                    onFirstMount={onFirstMount}
                    key={router.route}
                    {...pageProps}
                    currentLink={currentLink}
                    allPathNames={allPathNames}
                    loading={loading}
                    currentPage={currentPage}
                    reLoadDelay={reLoadDelay}
                    setReLoadDelay={setReLoadDelay}
                  />     
                </AnimatePresence>
              </Layout>  
            </PersistGate>                
         </>
       )
      :
       (
          <>
            <PersistGate persistor={store}>
              <Layout allPathNames={allPathNames}
                      currentPage={currentPage}
                      loading={loading}
                      reLoadDelay={reLoadDelay}
                      onFirstMount={onFirstMount}
                      staggernateContentDelayed={staggernateContentDelayed}
                      >
                <AnimatePresence exitBeforeEnter>
                  <Component
                    onFirstMount={onFirstMount}
                    key={router.route}
                    {...pageProps}
                    currentLink={currentLink}
                    allPathNames={allPathNames}
                    loading={loading}
                    currentPage={currentPage}
                    reLoadDelay={reLoadDelay}
                    setReLoadDelay={setReLoadDelay}
                  />     
                </AnimatePresence>
              </Layout>  
            </PersistGate>                
         </>
        )

   };
   
  export default wrapper.withRedux(MyApp);




















