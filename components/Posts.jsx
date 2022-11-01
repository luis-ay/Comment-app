import React,
{ useState, useEffect } from 'react'
import Post from './Post'

const Posts = ({posts, handleReply}) => { 
    return ( 
        <div className='mt-4 ml-6 bg-gray-300 rounded-md w-3/4 p-6'>
            <h1 className='text-2xl'>Posts</h1>
            {posts.map((postObj,index) => {
                return (
                    <Post key={index} post={postObj} handleReply={handleReply}/>
                )
            })}
        </div>
    ) 
}

export default Posts