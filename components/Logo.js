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