import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

// import { offline } from '@redux-offline/redux-offline';
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import rootReducers from '../reducers';
import sagas from '../sagas';

const config = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['LoginAction'],
    debug: true,
    timeout: 0
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const reduxDevtool = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;
const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };
const store = createStore(
    reducers,
    undefined,
    compose(
        ...enhancers,
        reduxDevtool,
        // offline(offlineConfig)
    )
);


const persistor = persistStore(store, persistConfig, () => {
    // console.log('Test', store.getState());
});

const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;