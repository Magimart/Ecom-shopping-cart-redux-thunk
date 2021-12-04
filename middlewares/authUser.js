
import catchAsyncErrors from "./catchAsyncErrors";
import {getSession } from 'next-auth/client';
import ErrorHandler from "../utils/helpers/errorHandlers";

 
ErrorHandler
const isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => { 

   
          const session = await getSession({req});
          console.log("he is authenticated user------------------")
          console.log(session)
          if(!session){
               return next(new ErrorHandler('Kindly login to continue', 401));
          }
        //   console.log(req.user)
          req.user = session.user;
          next();
    }
    
) ;


// Handling user roles
const authorizeRoles = (...roles) => {
console.log("here is the roles from the authorize roles auth<<<<<<<<<<<<<<<<<")
  console.log(roles)
  return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
          return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource.`, 403))
      }

      next()
  }
}


export {
  isAuthenticatedUser,
  authorizeRoles
}



