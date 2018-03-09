import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST } from '../actions/index'

export default function (state = {}, action){
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');     //Returns an object with key as the post id and the value as the post object
        
        case FETCH_POST:
            return { ...state, [action.payload.data.id] : action.payload.data} //Add the particular fetched post to the state

        default:
            return state;
    }
}