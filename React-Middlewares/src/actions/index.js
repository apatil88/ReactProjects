import { FETCH_USERS } from './types';
import axios from 'axios';

export function fetchUsers(){
    const request = axios.get('https://jsonplaceholder.typicode.com/users');  //AJAX call, returns a promise

    return {
        type : FETCH_USERS,
        payload : request
    }
}