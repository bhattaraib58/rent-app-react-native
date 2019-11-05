import {combineReducers} from 'redux';

import flatReducer from './flat';
import loginReducer from './login';
import {favoriteFlatReducer} from './favoriteFlat';

const rootReducer = combineReducers({
  flat: flatReducer,
  login: loginReducer,
  favoriteFlat: favoriteFlatReducer,
});

export default rootReducer;
