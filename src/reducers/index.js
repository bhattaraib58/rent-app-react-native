import { combineReducers } from 'redux';

import flatReducer from './flat';
import loginReducer from './login';
import persistRehydrate from './persist';


const rootReducer = combineReducers({
    flat: flatReducer,
    login: loginReducer,
    persistRehydrate:persistRehydrate,
});

export default {
    reducer:rootReducer
};
