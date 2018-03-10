import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index'

export default function (state = {}, action){
    switch(action.type){
        case DELETE_POST:
            return _.omit(state, action.payload); //If the state object has a key of post id, omit that particular post and return a new instance

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');     //Returns an object with key as the post id and the value as the post object. Treat application state as an object.
        
        case FETCH_POST:
            return { ...state, [action.payload.data.id] : action.payload.data} //Fetching the same post again overwrites the existing state since state is an object

        default:
            return state;
    }
}