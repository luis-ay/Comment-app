import React,
{ useState, useEffect } from 'react'
import Counter from './Counter'


const Post = ({post, handleReply}) => { 
    const replySubmit = (replyName, replyText) => {
        handleReply(post.name, replyName, replyText)
    }

    return ( 
        <div key={post.name} className='border-2 border-gray-500 bg-green-400 rounded-md p-4 my-2'>
            <h1 className='text-lg font-semibold'>{post.name}</h1>
            <div className='flex justify-between'>
                <p className='text-md font-medium mb-4'>{post.text}</p>
                <Counter/>
            </div>
            {post.replies && 
                <ReplyForm replySubmit={replySubmit}/>
            }
            {post.replies && (post.replies.map((replyObj,index) => {
                return (
                    <Post key={index} post={replyObj} handleReply={handleReply} style={{width: '80%', backgroundColor:'green'}}/>
                )
            }))}
        </div>
    ) 
}

const ReplyForm = ({replySubmit}) => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        replySubmit(name, text)
        setName('')
        setText('')
    }

    return (
        <div>
            <h3 className='font-semibold'>Add Comment</h3> 
            <form onSubmit={handleSubmit} className='my-2'>
                <div className='my-2'>
                    <label htmlFor='postName'>Name: </label>
                    <input id='postName' type={'text'} required={true} value={name} onChange={handleNameChange} className='rounded-md p-1'></input>
                </div>
                <div className='my-2'>
                    <label htmlFor='postText' className='ml-2'>Comment Text: </label>
                    <input id='postText' type={'text'} required={true} value={text} onChange={handleTextChange} className='rounded-md p-1 mb-2'></input>
                </div>
                <button type='submit' className=' bg-gray-400 text-white font-medium p-2 rounded-md'>Submit</button>
            </form>
        </div> 
    ) 
}

export default Post