export default function(state = null, action){
    console.log('Action received : ' , action);  //Redux-promise middleware creates a new action with the actual payload data that is sent to all reducers.
    return state;
}