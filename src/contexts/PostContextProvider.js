import React, { createContext, useReducer, useState, useEffect } from 'react';
import { postReducer } from '../reducers/postReducer'
import axios from 'axios'
export const PostContext = createContext();

export default (props) => {
    const [posts, dispatch] = useReducer(postReducer, []);
    const [isloading, setLoading] = useState(true)

    useEffect(() => {

        const fetchPosts = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({ type: 'FETCH_POSTS', posts: result.data });
            setLoading(false)
            return result;

        }
        fetchPosts();

    }, [])


    return (
        <PostContext.Provider value={{ posts, isloading, setLoading, dispatch }}>
            {props.children}
        </PostContext.Provider>
    )
}