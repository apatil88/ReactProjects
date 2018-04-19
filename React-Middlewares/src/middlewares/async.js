export default function({ dispatch }){
    return next => action => {
        
        //If action does not have a payload or if payload does not have a .then property, then pass it on to the next middleware
        if(!action.payload || !action.payload.then){
            return next(action); //send the action to the next middleware in the stack, if there is no middleware then send it to the reducer
        }

        console.log('No promise present ', action);
    }

    
    
}