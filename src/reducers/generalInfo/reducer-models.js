import {
    GOT_MODELS
} from '../../actions/types'

const initialState = [
]

export default modelReducer = (state = initialState, action) => {
    switch(action.type){
        case GOT_MODELS:
            return action.payload;
        default:
            return state;
    }
}