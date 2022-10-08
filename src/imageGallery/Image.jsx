import React from 'react'
import { useState,useEffect } from 'react'

const Image = () => {
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [term,setTerm]= useState(''); // for image searching
    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=8768218-c2a04f45f7ee8e655781103a6&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err));
    },[term]);

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src="https://source.unsplash.com/random" alt="image" className='w-full' />
        <div className='px-6 py-4'>
            <div className='font-bold text-purple-600 text-xl mb-2'>Photo by John Doe</div>
            <ul>
            <li>
                <strong>Views: </strong>
                4000
            </li>
            <li>
                <strong>Downloads: </strong>
                405
            </li>
            <li>
                <strong>Likes: </strong>
                400
            </li>
        </ul>
        </div>

        <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'> 
                #tag1
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'> 
                #tag2
            </span><span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'> 
                #tag3
            </span>
        </div>

    </div>
  )
}

export default Image