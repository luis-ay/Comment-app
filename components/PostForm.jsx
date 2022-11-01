import React,
{ useState, useEffect } from 'react'

const PostForm = ({handlePostSubmit}) => { 
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
        handlePostSubmit(name, text)
        setName('')
        setText('')
    }

    return (
        <div>
            <h1>Add Post</h1> 
            <form onSubmit={handleSubmit}>
                <label htmlFor='postName'>Name: </label>
                <input id='postName' type={'text'} required={true} value={name} onChange={handleNameChange}></input>
                <label htmlFor='postText'>Post Text: </label>
                <input id='postText' type={'text'} required={true} value={text} onChange={handleTextChange}></input>
                <button type='submit'>Submit</button>
            </form>
        </div> 
    ) 
}

export default PostForm