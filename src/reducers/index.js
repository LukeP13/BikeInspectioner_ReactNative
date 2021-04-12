import { combineReducers } from 'redux';
import generalInfoReducer from './generalInfo';
import authReducer from './reducer-auth';

const rootReducer = combineReducers({
    auth: authReducer,
    general: generalInfoReducer
})

export default rootReducer;