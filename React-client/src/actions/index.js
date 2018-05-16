import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}){

    //Generally, action creators return an object. However, since we are using redux thunk, we return a function.
    //This function gives us access to the dispatch method allowing us to dispatch actions at any point of time we want
    return function(dispatch){

        //Submit email/password to server
        axios.post(`${ROOT_URL}/signin`, { email, password });

        //if request is good
        // - update state to indicate user is authenticated
        // - save the JWT token
        // - redirect to the route '/feature'

        //if request is bad
        // - show an error to the user

    }
    
}