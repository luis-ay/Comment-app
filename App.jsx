import React,
{ useState, useEffect } from 'react'
import PostForm from './components/PostForm'
import Posts from './components/Posts'

const App = () => { 
    const [posts, setPosts] = useState([])
    const handlePostFormSubmit = (name, text) => {
        console.log('submitted')
        console.log('name',name)
        console.log('text',text)
        setPosts([...posts,{'name':name, 'text':text, "replies":[]}])
    }
    
    const handleReplyFormSubmit = (postName, replyName, replyText) => {
        setPosts(posts.map(post =>
            {
                if (post.name === postName) {
                    return {...post, 'replies':[...post.replies,{'name':replyName, 'text':replyText, 'replies':[]}]}
                }
                else {
                    const newReplies = (post.replies.map(reply => reply.name === postName ? reply = {...reply, 'replies':[...reply.replies,{'name':replyName, 'text':replyText}]} : reply ))
                    return {...post, 'replies':newReplies}
                }
            }))
        }

    return ( 
        <div>
            <h1 className='text-green-400 text-2xl font-bold ml-4 mt-4'>Comment App</h1>
            <PostForm handlePostSubmit={handlePostFormSubmit}/>
            <Posts posts={posts} handleReply={handleReplyFormSubmit}/>
        </div>
    ) 
}

export default App