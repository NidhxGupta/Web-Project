import authReducer from './auth.reducers';
import userReducer from './user.reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,

});

export default rootReducer;