import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
    //console.log('Action received : ' , action);  //Redux-promise middleware creates a new action with the actual payload data that is sent to all reducers.
    
    switch(action.type){
        case FETCH_WEATHER:
            //return state.concat([ action.payload.data ]);  //Prevent mutation of state. Return a new version of state with older city search data and new city search data
            return [ action.payload.data, ...state ];
        }
    return state;
}