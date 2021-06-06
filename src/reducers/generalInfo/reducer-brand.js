import {
    GOT_BRANDS
} from '../../actions/types'

const initialState = [
]

export default brandReducer = (state = initialState, action) => {
    switch(action.type){
        case GOT_BRANDS:
            return action.payload;
        default:
            return state;
    }
}