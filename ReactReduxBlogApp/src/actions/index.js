import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'; //action type

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=PAPERCLIP4321';

export function fetchPosts(){
    const request = axios.get(`${ ROOT_URL }/posts${ API_KEY }`);

    return {
        type : FETCH_POSTS,
        payload : request
    };
}