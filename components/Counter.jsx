import React,
{ useState } from 'react'

const Counter = () => { 
    const [likes, setLikes] = useState(0)

    return ( 
        <div className='flex-col w-1/4 space-y-2'>
            <h1 className='text-xl font-bold m-auto'>{likes}</h1>
            <button onClick={() => setLikes(likes + 1)} className='bg-gray-300 rounded-xl p-2 mr-2'>Up</button>
            <button onClick={() => setLikes(likes - 1)} className='bg-gray-300 rounded-xl p-2'>Down</button>
        </div>
    ) 
}

export default Counter