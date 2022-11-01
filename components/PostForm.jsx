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
        <div className='w-1/2 flex-col items-center bg-green-400 rounded-md mt-4 p-4 ml-6'>
            <h1 className='mb-2 text-xl'>Add Post</h1> 
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='postName'>Name: </label>
                    <input id='postName' type={'text'} required={true} value={name} onChange={handleNameChange} className='rounded-md p-1'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor='postText'>Post Text: </label>
                    <input id='postText' type={'text'} required={true} value={text} onChange={handleTextChange} className='rounded-md p-1 w-full'></input>
                </div>
                <button type='submit' className=' bg-gray-400 text-white font-medium p-2 rounded-md'>Submit</button>
            </form>
        </div> 
    ) 
}

export default PostForm