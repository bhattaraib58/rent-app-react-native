import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import sagas from '../sagas';
import rootReducers from '../reducers';

const config = {
  key: 'root',
  storage: AsyncStorage
};
const reducers = persistReducer(config, rootReducers);

const sagaMiddleware = createSagaMiddleware();

const reduxDevtool =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevtool
  )
);

const persistor = persistStore(store);

// eslint-disable-next-line require-jsdoc
const configureStore = () => ({ persistor, store });

sagaMiddleware.run(sagas);

export default configureStore;
