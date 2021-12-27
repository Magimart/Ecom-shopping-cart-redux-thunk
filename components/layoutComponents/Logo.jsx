import React from "react";
import Link from "next/link";
const Logo = ({onFirstMount}) => {

    return (
      
           <>
              <Link href="/">
                  <div className="z-10 fixed m-4 bg-transparent " src="...">
                            <h1
                            className="
                            p-2 
                            bg-gradient-to-r from-transparent red-300 to-yellow-600 
                            hover:from-transparent via-green-200 hover:to-gray-500
                            "
                  >
                                        Mf
                            </h1>                     
                  </div>
              </Link>
            </>
    );
  };

  export default Logo;