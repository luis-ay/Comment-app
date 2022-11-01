import React,
{ useState, useEffect } from 'react'
import Counter from './Counter'


const Post = ({post, handleReply}) => { 
    const replySubmit = (replyName, replyText) => {
        handleReply(post.name, replyName, replyText)
    }

    return ( 
        <div key={post.name} style={{width:'80%', borderWidth:'4px', borderColor:'black', border:'dashed'}}>
            <h1>{post.name}</h1>
            <p>{post.text}</p>
            <Counter/>
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
            <h3>Add Comment</h3> 
            <form onSubmit={handleSubmit}>
                <label htmlFor='postName'>Name: </label>
                <input id='postName' type={'text'} required={true} value={name} onChange={handleNameChange}></input>
                <label htmlFor='postText'>Comment Text: </label>
                <input id='postText' type={'text'} required={true} value={text} onChange={handleTextChange}></input>
                <button type='submit'>Submit</button>
            </form>
        </div> 
    ) 
}

export default Post