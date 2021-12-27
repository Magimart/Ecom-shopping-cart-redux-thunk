//___ref__https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist/blob/master/store/sync_storage.js

import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';

import storage from './sync_storage';
import { cart } from './reducers/reducers';

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
    return createStore(reducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require('redux-persist');

    const persistConfig = {
      key: 'nextjs',
      // whitelist:[ 'cart'],
      whitelist:[ ],
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ); 

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(initStore);


