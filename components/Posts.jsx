import React,
{ useState, useEffect } from 'react'
import Post from './Post'

const Posts = ({posts, handleReply}) => { 
    return ( 
        <div style={{backgroundColor:'#ffa247', borderRadius:'5px', padding:'2px', margin:'10px'}}>
            <h1>Posts</h1>
            {posts.map((postObj,index) => {
                return (
                    <Post key={index} post={postObj} handleReply={handleReply}/>
                )
            })}
        </div>
    ) 
}

export default Posts