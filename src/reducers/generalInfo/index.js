import { combineReducers } from 'redux';
import brandReducer from './reducer-brand';
import modelReducer from './reducer-models';

const generalInfoReducer = combineReducers({
    brands: brandReducer,
    models: modelReducer
})

export default generalInfoReducer; 