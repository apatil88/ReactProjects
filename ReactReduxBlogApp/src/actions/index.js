import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'; //action type
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=PAPERCLIP4321';

export function fetchPosts(){
    const request = axios.get(`${ ROOT_URL }/posts${ API_KEY }`);

    return {
        type : FETCH_POSTS,
        payload : request
    };
}

export function createPost(values, callback){
    const request = axios.post(`${ ROOT_URL }/posts${ API_KEY }`, values)
                    .then(() => callback());  //Only after post is created, navigate the user to the list of posts page

    return {
        type : CREATE_POST,
        payload : request
    };

}

export function fetchPost(id){
    const request = axios.get(`${ROOT__URL}/posts/${id}${API_KEY}`);

    return{
        type : FETCH_POST,
        payload: request
    }
}