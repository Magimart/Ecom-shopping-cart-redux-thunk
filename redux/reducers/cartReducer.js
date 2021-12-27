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

            //  console.log("here is the intial state_______intial __paylod__state.cartI___initsta__init.cart____________________")                 
            //  console.log(action.payload)
            //  console.log(state.cartItems)
            //  console.log(initialState);
            //  console.log(initialState.cartItems); //reset 
             let inCartItems = initialState.cartItems;

    switch (action.type) {

      case ADD_TO_CART:

        try{
                  const item = action.payload;
                     // let inCartItems = initialState.cartItems;

                        function addShoppingCart(payloadData) {
                            
                                let isExistedItem = inCartItems.some((item) => item._id === payloadData._id);
                              //let isExistedItem = inCartItems.find((item) => item._id === payloadData._id);

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
           
              function removeShoppingCart(payLoad) {

                console.log(" here are items found in basket______________basket______________")
                console.log(inCartItems)

                let removeAndUpdateLocalStore = inCartItems.filter((item) => item._id !== payLoad);

                console.log("here is the filtered items to be removed of left________below in desktop state___________")
                console.log(removeAndUpdateLocalStore)

                     //localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ; clears all
                  
                    inCartItems && inCartItems.length <= 0? localStorage.removeItem('cart', JSON.stringify(removeAndUpdateLocalStore)) 
                           : localStorage.setItem('cart', JSON.stringify(removeAndUpdateLocalStore)) ;
              
                      return removeAndUpdateLocalStore;
                }

              
                console.log("here are the states at removal ________________________-___")
                console.log(removeShoppingCart(id))
                console.log(state) 
                console.log(state.cartItems)
                console.log(initialState.cartItems)            
           
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

                 const incrementQty = (payloadData) => {

                      // let inCartItems = initialState.cartItems;
                      let {_id, qty} = payloadData;

                      let isExistedItem = inCartItems.filter((item) => item._id === _id);
                    
                        if (isExistedItem) {                                         
                          return {
                              ...state,
                                cartItems: inCartItems.forEach((el ) =>el && el._id === _id ? el.qty++ : el)
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

            const decrementQty = (payloadData) => {

                 let inCartItems = initialState.cartItems;
                 let {_id, qty} = payloadData;

                 let isExistedItem = inCartItems.filter((item) => item._id === _id);               
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








