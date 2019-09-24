import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers';
import sagas from '../sagas';

const config = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['LoginAction'],
    debug: true
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));

const persistor = persistStore(store, persistConfig, () => {
    // console.log('Test', store.getState());
});

const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;