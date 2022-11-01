import React,
{ useState } from 'react'

const Counter = () => { 
    const [likes, setLikes] = useState(0)

    return ( 
        <div style={{backgroundColor:'#6a5acd'}}>
            <h1>{likes}</h1>
            <button onClick={() => setLikes(likes + 1)}>Like</button>
            <button onClick={() => setLikes(likes - 1)}>Dislike</button>
        </div>
    ) 
}

export default Counter