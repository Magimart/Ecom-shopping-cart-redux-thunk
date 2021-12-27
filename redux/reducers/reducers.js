import { combineReducers } from 'redux';

 import { registerUserReducer, userReducer, allUsersReducer, isCurrentUserReducer } from './userReducer';
 import { publishReducer, allInfosReducer } from './appInfoReducer';
 import { cartReducer,  } from './cartReducer';
 import { checkoutReducer, orderSummaryReducer } from './checkoutReducer';
 import { allProductReducer, productDetailsReducer, newProductReducer, currentUserProductsReducer } from './productReducer';
 import { myOrderReducer, orderDetailsReducer } from './orderReducer';




const reducer = combineReducers({ 
        allProducts: allProductReducer,
      productDetails: productDetailsReducer,
//         newProduct: newProductReducer,
//         currentUserProducts: currentUserProductsReducer,
//         cart: cartReducer,
//         checkout: checkoutReducer, 
//         newUser: registerUserReducer,
//         orderSummary: orderSummaryReducer, 
//         currentUserOrders: myOrderReducer,
//         orderDetails: orderDetailsReducer,    
//         user: userReducer,
//        allUsers: allUsersReducer,
//        allInfos: allInfosReducer,
//        newInfo: publishReducer,
//        isCurrentUser: isCurrentUserReducer, 
});

export default reducer;



