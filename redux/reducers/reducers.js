import { combineReducers } from 'redux';

 import { registerUserReducer, userReducer, allUsersReducer, isCurrentUserReducer } from './userReducer';
 import { publishReducer, allInfosReducer } from './appInfoReducer';
 import { cartReducer,  } from './cartReducer';
 import { checkoutReducer, orderSummaryReducer } from './checkoutReducer';
 import { allProductReducer, productDetailsReducer } from './productReducer';
 import { myOrderReducer } from './orderReducer';




const reducer = combineReducers({ 
        allProducts: allProductReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        checkout: checkoutReducer, 
        // newOrderPurchase: orderReducer,
        newUser: registerUserReducer,
        orderSummary: orderSummaryReducer, 
        currentUserOrders: myOrderReducer,    
        user: userReducer,
       allUsers: allUsersReducer,
       allInfos: allInfosReducer,
       newInfo: publishReducer,
       isCurrentUser: isCurrentUserReducer, 
});

export default reducer;



