import { combineReducers } from 'redux';
import brandReducer from './reducer-brand';

const generalInfoReducer = combineReducers({
    brands: brandReducer
})

export default generalInfoReducer; 