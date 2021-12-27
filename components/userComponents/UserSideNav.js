import React from "react";


const  UserSideNav = () => {
            return (
                     <>
                        <div className="min-h-sm px-1   bg-black bg-opacity-40">

                            <div className="signedAsWrap flex h-12 w-full mt-6 
                                  bg-gradient-to-r from-transparent via-white to-transparent
                            ">
                                  <div className="h-full ">
                                        <div> 
                                        {/* reserv */}
                                        </div>
                                        <div className="mx-4 bg-gray-700 h-full items-center flex w-max">
                                                    <p className=" text-yellow-100 justify-self mx-6 text-xl
                                                    ">
                                                    Your recent <span className="text-red-500">activities</span>
                                                    </p>
                                        </div>
                                </div>
                                <div className=" ">


                                </div>
                            </div>

                                <div className="flex items-center min-h-xs  my-6 py-8 px-5">
                                    <div className="w-">
                                        <h1 className="font-hairline text-white text-2xl leading-none">You can continue to your dashboard</h1>
                                        <p className="mt-4 text-white text-sm tracking-wide font-thin leading-normal">
                                        or head right a way to edit your profile page
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </>
            )
    }
export default UserSideNav;

  




