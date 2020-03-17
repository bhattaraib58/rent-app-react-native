import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

// import { offline } from '@redux-offline/redux-offline';
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import rootReducers from '../reducers';
import sagas from '../sagas';

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
    // offline(offlineConfig)
  )
);

const persistor = persistStore(store);

const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
