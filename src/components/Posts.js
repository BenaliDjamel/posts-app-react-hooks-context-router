import React, { useContext } from 'react';
import PostDetails from './PostList'
import { PostContext } from '../contexts/PostContextProvider';
import Spinner from './Spinner'


export default () => {
    const { posts } = useContext(PostContext)
    const { isloading } = useContext(PostContext)

    return (

        isloading ? (<Spinner />) : (<div className="my-5">

            <ul>
                {
                    posts.map(post => {
                        return (<PostDetails post={post} key={post.id} />)
                    })
                }
            </ul>
        </div>)

    )
}