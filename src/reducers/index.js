import { combineReducers } from 'redux';

import flatReducer from './flat';
import loginReducer from './login';


const rootReducer = combineReducers({
    flat: flatReducer,
    login: loginReducer,
});

export default rootReducer;
