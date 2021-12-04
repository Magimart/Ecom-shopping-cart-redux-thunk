import { getLocalState } from "../../utils/helpers/cartHelpers";
import {   ADD_TO_CART, 
           REMOVE_FROM_CART,
           INCREASE_QUANTITY,
           DECREASE_QUANTITY,
          //  PROCCEED_TO_CHECKOUT,
           ADD_CART_FAIL,
           CLEAR_ERRORS
       } from "../constants/cartTypes";

  
  let initialState = {
          cartItems: getLocalState() && getLocalState(),
       };
       
    

//  export const cartReducer = (state = { cartItems: [] }, action, getState) => {
   export const cartReducer = (state = initialState, action, getState) => {

             console.log("here is the intial state_______intial __paylod__state.cartI___initsta__init.cart____________________")                 
             console.log(action.payload)
             console.log(state.cartItems)
             console.log(initialState);
             console.log(initialState.cartItems); //reset 
             let inCartItems = initialState.cartItems;

    switch (action.type) {

      case ADD_TO_CART:

        try{
                  const item = action.payload;
                      console.log(item) 
                     // let inCartItems = initialState.cartItems;

                        function addShoppingCart(payloadData) {
                                 console.log(payloadData)
                          console.log("here is the the incartitem initial state ___________incartitems________new payloadData above_______________-")
                            console.log(inCartItems)

                                let isExistedItem = inCartItems.some((item) => item._id === payloadData._id);
                              //let isExistedItem = inCartItems.find((item) => item._id === payloadData._id);

                                    console.log("here is payloadData _____________if exists ____________-")
                                    console.log(isExistedItem)

                                      if (isExistedItem) {                                          
  
                                          console.log(" the items are matching  incrase with qty + button________prev state belo_____state.cart___________")
                                          console.log(state)
                                          console.log(state.cartItems)

                                          return {
                                              ...state,
                                                  // cartItems: state.cartItems.map((el) =>
                                               cartItems: inCartItems.forEach((el) => {
                                                 console.log("________if___exist___________________here is the item im map existed item____________")
                                                  console.log(el)
                                                  console.log(item)
                                                               // el._id === payloadData._id ? el.qty += 1 : el
                                                   if (el._id === payloadData._id) {
                                                      return undefined;
                                                    }
                                                    return el;                                              }
                                                ),
                                          }                                        
                                                   
                                      }else {
                                          
                                          console.log(" this is a new payloadData. it will be pushed________________________")
                                          inCartItems && inCartItems.push(payloadData);
 

                                      }
                                                                        
                                    return localStorage.setItem('cart', JSON.stringify(inCartItems ));
                        }
                        console.log(item && addShoppingCart(item))
         
                return {
                   ...state,
                    cartItems: initialState.cartItems ,
                    // cartItems: state.cartItems ,
                    // cartItems: getLocalState(),
                }      
                              
            }catch(error){
              console.log(error)
            }
      //______________________________________remove item
      case REMOVE_FROM_CART:            
          try {

            console.log("here is my payloda_id___________________")
            const id = action.payload;
            console.log(id)
           
            //  let inCartItems = initialState.cartItems;

              function removeShoppingCart(payLoad) {

                console.log(" here are items found in basket______________basket______________")
                console.log(inCartItems)

                let removeAndUpdateLocalStore = inCartItems.filter((item) => item._id !== payLoad);

                console.log("here is the filtered items to be removed of left________below in desktop state___________")
                console.log(removeAndUpdateLocalStore)

                     //localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ; clears all
                  
                    inCartItems && inCartItems.length <= 0? localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) 
                           : localStorage.setItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ;


                    // localStorage.setItem('cart', JSON.stringify(itemsLeft))
              
                      return removeAndUpdateLocalStore;
                }

                //  id && removeShoppingCart(id);
                //return  state = {cartItems: initialState.cartItems} 
                console.log("here are the states at removal ________________________-___")
                console.log(removeShoppingCart(id))
                console.log(state) 
                console.log(state.cartItems)
                console.log(initialState.cartItems)            
           
                //  return  state = {cartItems:id && removeShoppingCart(id)}   

                return {
                        //  state,
                        cartItems: id && removeShoppingCart(id),
                        cartItems: getLocalState()                                
                      }
        
          
          } catch (error) {
                console.log(error)
          }

        //__increase quauntity__________________________________________________
        case INCREASE_QUANTITY:

          try {
                 const payloadData = action.payload;
                 console.log(payloadData)

                 const incrementQty = (payloadData) => {

                      // let inCartItems = initialState.cartItems;
                      let {_id, qty} = payloadData;

                      let isExistedItem = inCartItems.filter((item) => item._id === _id);
                        console.log(isExistedItem)
                    
                        if (isExistedItem) {                                         
                          return {
                              ...state,
                                cartItems: inCartItems.forEach((el ) =>el && el._id === _id ? el.qty++ : el)
                                //  {
                                              
                                //         if (el && el._id === _id) {
                                //               return  el.qty++;
                                //           }
                                //           return el;                                 
                                //   }
                                // )
                                ,
                          }                                   
                        }
                   }
                   return {
                    cartItems: payloadData && incrementQty(payloadData),
                    cartItems: getLocalState(),
                } 
              } catch (error) {
                  console.log(error)
             
              }

        //___decrease quantity
        case DECREASE_QUANTITY:
          try {
            const payloadData = action.payload;
            console.log(payloadData)

            const decrementQty = (payloadData) => {

                 let inCartItems = initialState.cartItems;
                 let {_id, qty} = payloadData;

                 let isExistedItem = inCartItems.filter((item) => item._id === _id);
                   console.log(isExistedItem)
               
                   if (isExistedItem) {                                         
                     return {
                         ...state,
                           cartItems: inCartItems.forEach((el ) =>el && el._id  === _id  && el.qty > 1? el.qty-- : el)
                            ,
                     }                                   
                   }
              }
              return {
               cartItems: payloadData && decrementQty(payloadData),
               cartItems: getLocalState(),
           } 
         } catch (error) {
             console.log(error)
        
         }



        //__addd fail hence!!
        // case ADD_CART_FAIL:
        //   return {
        //     loading: false,
        //     error: action.payload
        //  } 

        case CLEAR_ERRORS:
          return {
                ...state,
              error: null
          }
          default:
            return state
    }
}













//______________________-bk2







// import { getLocalState } from "../../utils/helpers/cartHelpers";
// import {   ADD_TO_CART, 
//            REMOVE_FROM_CART,
//            INCREASE_QUANTITY,
//            DECREASE_QUANTITY,
//            ADD_CART_FAIL,
//            CLEAR_ERRORS
//        } from "../constants/cartTypes";

  
//   let initialState = {
//           cartItems: getLocalState() && getLocalState(),
//        };
       
    

// //  export const cartReducer = (state = { cartItems: [] }, action, getState) => {
//    export const cartReducer = (state = initialState, action, getState) => {

//              console.log("here is the intial state_______intial __paylod__state.cartI___initsta__init.cart____________________")                 
//              console.log(action.payload)
//              console.log(state.cartItems)
//              console.log(initialState);
//             console.log(initialState.cartItems); //reset 
//              let inCartItems = initialState.cartItems;

// switch (action.type) {


//       case ADD_TO_CART:

//         try{
//                   const item = action.payload;
//                       console.log(item) 
//                      // let inCartItems = initialState.cartItems;

//                         function addShoppingCart(payloadData) {
//                                  console.log(payloadData)
//                           console.log("here is the the incartitem initial state ___________incartitems________new payloadData above_______________-")
//                             console.log(inCartItems)

//                                 let isExistedItem = inCartItems.some((item) => item._id === payloadData._id);
//                               //let isExistedItem = inCartItems.find((item) => item._id === payloadData._id);

//                                     console.log("here is payloadData _____________if exists ____________-")
//                                     console.log(isExistedItem)

//                                       if (isExistedItem) {                                          
  
//                                           console.log(" the items are matching  incrase with qty + button________prev state belo_____state.cart___________")
//                                           console.log(state)
//                                           console.log(state.cartItems)

//                                           return {
//                                               ...state,
//                                                   // cartItems: state.cartItems.map((el) =>
//                                                cartItems: inCartItems.forEach((el) => {
//                                                  console.log("________if___exist___________________here is the item im map existed item____________")
//                                                   console.log(el)
//                                                   console.log(item)
//                                                                // el._id === payloadData._id ? el.qty += 1 : el
//                                                    if (el._id === payloadData._id) {
//                                                       el.qty += 1;
//                                                       console.log("data ______________increased with button_____________")
//                                                       console.log(el.qty)
//                                                     }
//                                                     return el;                                              }
//                                                 ),
//                                           }                                        
                                                   
//                                               inCartItems.forEach((item) => {
//                                               if (item._id === payloadData._id) {
//                                                 item.qty += 1;
//                                               }
//                                               return item;
//                                               });  
                                       
//                                         }
                                      
//                                       else {
                                          
//                                           console.log(" this is a new payloadData. it will be pushed________________________")
//                                           inCartItems && inCartItems.push(payloadData);
 

//                                       }
                                                                        
//                                     return localStorage.setItem('cart', JSON.stringify(inCartItems ));
//                         }
//                         console.log(item && addShoppingCart(item))
         
//                 return {
//                    ...state,
//                     cartItems: initialState.cartItems ,
//                     // cartItems: state.cartItems ,
//                     // cartItems: getLocalState(),
//                 }      
                              
//             }catch(error){
//               console.log(error)
//             }

//       case REMOVE_FROM_CART:            
//           try {

//             console.log("here is my payloda_id___________________")
//             const id = action.payload;
//             console.log(id)
           
//              let inCartItems = initialState.cartItems;

//               function removeShoppingCart(payLoad) {

//                 console.log(" here are items found in basket______________basket______________")
//                 console.log(inCartItems)

//                 let removeAndUpdateLocalStore = inCartItems.filter((item) => item._id !== payLoad);

//                 console.log("here is the filtered items to be removed of left________below in desktop state___________")
//                 console.log(removeAndUpdateLocalStore)

//                      //localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ; clears all
                  
//                     inCartItems && inCartItems.length <= 0? localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) 
//                            : localStorage.setItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ;


//                     // localStorage.setItem('cart', JSON.stringify(itemsLeft))
              
//                       return removeAndUpdateLocalStore;
//                 }

//                 //  id && removeShoppingCart(id);
//                 //return  state = {cartItems: initialState.cartItems} 
//                 console.log("here are the states at removal ________________________-___")
//                 console.log(removeShoppingCart(id))
//                 console.log(state) 
//                 console.log(state.cartItems)
//                 console.log(initialState.cartItems)            
           
//                 //  return  state = {cartItems:id && removeShoppingCart(id)}   

//                 return {
//                         //  state,
//                         cartItems: id && removeShoppingCart(id),
//                         cartItems: getLocalState()                                
//                       }
        
          
//           } catch (error) {
//                 console.log(error)
//           }


//        //__increase quauntity
//         case INCREASE_QUANTITY:

//            try {

//             console.log("here is my payloda_id___________________")
//             const id = action.payload;
//             console.log(id)
             
//                 const incrementQty = (ID) => {
//                   let inCartItems = initialState.cartItems;

//                   let isExistedItem = inCartItems.filter((item) => item._id === ID);

//                     console.log(isExistedItem)
                 
//                     if (isExistedItem) {                                          
  
//                       console.log(" the items are matching  incrase with qty + button________prev state belo_____state.cart___________")
//                       console.log(state)
//                       console.log(state.cartItems)

//                       return {
//                           ...state,
//                               // cartItems: state.cartItems.map((el) =>
//                              cartItems: inCartItems.forEach((el) => {
//                                                         console.log("________if___exist___________________here is the item im map existed item____________")
//                                                         console.log(el)
//                                            // el._id === payloadData._id ? el.qty += 1 : el
//                                if (el._id === ID) {
//                                 console.log("data ______________increased with button_____________")
//                                 console.log(el.qty)

//                                  return  el.qty += 1;
  
//                                 }
//                                 return el;                                              }
//                             ),
//                       }                                        
                               
//                           inCartItems.forEach((item) => {
//                           if (item._id === payloadData._id) {
//                             item.qty += 1;
//                           }
//                           return item;
//                           });  
                   
//                     }
//                   // return inCartItems;
//                 }

//                 id && incrementQty(id)
//                 return {
//                   ...state,
//                     cartItems: id && incrementQty(id),
//                     cartItems: getLocalState(),
//                 } 
                

//            } catch (error) {

//               console.log(error)
             
//            }


//         return {
//           loading: false,
//           error: action.payload
//         }

//         //___decrease quantity
//         case DECREASE_QUANTITY:
//           return {
//             loading: false,
//             error: action.payload
//           }

//         //__addd fail hence!!
//         case ADD_CART_FAIL:
//           return {
//             loading: false,
//             error: action.payload
//          } 

//    case CLEAR_ERRORS:
//      return {
//           ...state,
//          error: null
//     }
//     default:
//       return state
//     }
// }



            // let initialLocalState = typeof window !== "undefined" && localStorage.getItem("cart") ? 
            //                                    JSON.parse(localStorage.getItem("cart")) : []                         
            // initialLocalState = initialState.cartItems;
            // let inCartItems = initialState.cartItems;

            // [typeof window !== "undefined" && localStorage.getItem("cart") ? 
            //                                    JSON.parse(localStorage.getItem("cart")) : [] ]                        
            // initialState.cartItems = inCartItems.length? (inCartItems) :([]);
            //  inCartItems = initialState.cartItems;





//____________________________-bk




//import { getLocalState } from "../../utils/helpers/cartHelpers";
// import {   ADD_TO_CART, 
//            REMOVE_FROM_CART,
//            INCREASE_QUANTITY,
//            DECREASE_QUANTITY,
//            ADD_CART_FAIL,
//            CLEAR_ERRORS
//        } from "../constants/cartTypes";

  
//   let initialState = {
//           quantity: 0,
//           cartItems: getLocalState() && getLocalState(),
//        };
       
    

// //  export const cartReducer = (state = { cartItems: [] }, action, getState) => {
//    export const cartReducer = (state = initialState, action, qty, getState) => {

//              console.log("here is the intial state___________________________intial ______________________")                 
//              console.log(qty)
//              console.log(state.cartItems)
//              console.log(initialState);
//             console.log(initialState.cartItems); //reset 

// switch (action.type) {


//       case ADD_TO_CART:

//         try{
//                   const item = action.payload;
//                       console.log(item) 
//                      let inCartItems = initialState.cartItems;

//                         function addShoppingCart(data) {

//                           console.log("here is the the incartitem initial state ___________incartitems_______________________-")
//                             console.log(inCartItems)

//                                 //  const existItem = state.cartItems.find((x) => x._id === item._id)
//                                 let isExisted = inCartItems.some((item) => item._id === data._id);
                                  
//                                     console.log("here is the existing items with add function ____________-")
//                                     console.log(isExisted)

//                                     if (isExisted) {
//                                                       console.log("item you are adding already exists>>>>>>>>>>>>>>>>>>>>>>>>-_________________________")
//                                             inCartItems.forEach((item) => {
//                                               if (item._id === data._id) {
//                                                 item.quantity += 1;
//                                               }
//                                               return item;
//                                             });
//                                       } else {
//                                         inCartItems && inCartItems.push(data);

//                                       }
                                                                        
//                                     return localStorage.setItem('cart', JSON.stringify(inCartItems ));
//                         }
         
//            return {
//                   ...state,
//                   cartItems: item && addShoppingCart(item),
//                   cartItems: getLocalState(),
//                 }      
                              
//                         return state;
//             }catch(error){
//               console.log(error)
//             }

//       case REMOVE_FROM_CART:            
//           try {

//             console.log("here is my payloda_id___________________")
//             const id = action.payload;
//             console.log(id)
           
//              let inCartItems = initialState.cartItems;

//               function removeShoppingCart(payLoad) {

//                 console.log(" here are items found in basket______________basket______________")
//                 console.log(inCartItems)

//                 let removeAndUpdateLocalStore = inCartItems.filter((item) => item._id !== payLoad);

//                 console.log("here is the filtered items to be removed of left________below in desktop state___________")
//                 console.log(removeAndUpdateLocalStore)

//                      //localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ; clears all
                  
//                     inCartItems && inCartItems.length <= 0? localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) 
//                            : localStorage.setItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ;


//                     // localStorage.setItem('cart', JSON.stringify(itemsLeft))
              
//                       return removeAndUpdateLocalStore;
//                 }

//                 //  id && removeShoppingCart(id);
//                 //return  state = {cartItems: initialState.cartItems} 
//                 console.log("here are the states at removal ________________________-___")
//                 console.log(removeShoppingCart(id))
//                 console.log(state) 
//                 console.log(state.cartItems)
//                 console.log(initialState.cartItems)            
           
//                 //  return  state = {cartItems:id && removeShoppingCart(id)}   

//                 return {
//                         state,
//                         cartItems: removeShoppingCart(id),
//                         cartItems: getLocalState()                                
//                       }
        
          
//           } catch (error) {
//                 console.log(error)
//           }

//         //__addd fail hence!!
//         case ADD_CART_FAIL:
//           return {
//             loading: false,
//             error: action.payload
//          } 

//        //__increase quauntity
//         case INCREASE_QUANTITY:
//         return {
//           loading: false,
//           error: action.payload
//         }

//         //___decrease quantity
//         case DECREASE_QUANTITY:
//           return {
//             loading: false,
//             error: action.payload
//           }

//    case CLEAR_ERRORS:
//      return {
//           ...state,
//          error: null
//     }
//     default:
//       return state
//     }
// }
