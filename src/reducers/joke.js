import {FETCH_JOKES} from '../actions/joke'

const reducer = (state={}, action={}) => {
    switch(action.type){
        case FETCH_JOKES:
            return action.payload
        default:
            return state
    }
}

export default reducer