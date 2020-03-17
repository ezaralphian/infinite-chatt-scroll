import { applyMiddleware, createStore, compose } from 'redux';
import rootReducers from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const config = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [],
  // blacklist: ['loading'],
  debug: true,
  timeout: null //to get useful logging
};

const middleware = [thunkMiddleware];

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  // console.log("Test", store.getState());
});

export { persistor, store };
