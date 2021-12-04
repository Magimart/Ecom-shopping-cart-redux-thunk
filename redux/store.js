//___ref__https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist/blob/master/store/sync_storage.js

import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
// import counter from './counter/reducer';   !!!!!!!!!1 important
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';

import storage from './sync_storage';
import { cart } from './reducers/reducers';
// If you don't bother about the error redux-persist failed to create sync storage. 
//falling back to noop storage...uncomment the next line and comment out the previous import.
// See more on - https://github.com/vercel/next.js/discussions/15687
// const storage = require('redux-persist/lib/storage').default;

//COMBINING ALL REDUCERS
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
      const nextState = {
          ...state,
          ...action.payload
      }
      console.log("below is the next state")
      console.log(nextState)
      return nextState;
  } else {
      return reducers(state, action)
  }
}

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};



const initStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require('redux-persist');

    const persistConfig = {
      key: 'nextjs',
      //whitelist: ['counter'], // only counter will be persisted, add other reducers if needed
      // whitelist:[ 'cart'],
      whitelist:[ ],
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(initStore);



//______________________OLD REDUX CONFIG



// import { createStore, applyMiddleware } from 'redux';
// import { HYDRATE, createWrapper } from 'next-redux-wrapper';
// import thunkMiddleware from 'redux-thunk';
// import reducers from './reducers/reducers';

// // helps to make async in our actions
// // const middleware = [thunk]

// const bindMiddlware = (middlware) => {
//     if (process.env.NODE_ENV !== 'production') {
//         const { composeWithDevTools } = require('redux-devtools-extension')
//         return composeWithDevTools(applyMiddleware(...middlware))
//     }

//     return applyMiddleware(...middlware)
// };



// const reducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state,
//             ...action.payload
//         }
//         console.log("below is the next state")
//         console.log(nextState)
//         return nextState;
//     } else {
//         return reducers(state, action)
//     }
// }



// const initStore = () => {
//     // return createStore(reducer, bindMiddlware([thunkMiddleware]));
//     return createStore(
//            reducer,
//            bindMiddlware([thunkMiddleware]));

// }

// export const wrapper = createWrapper(initStore);


