import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage' 
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'SkilVulGiphy',
  storage: AsyncStorage,
  whitelist : ['Giphy']
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


const persistedReducer = persistReducer(persistConfig, combineReducers({ ...rootReducer }))
let storePersist = createStore(persistedReducer)
 
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);


sagaMiddleware.run(rootSaga);

export { store  };