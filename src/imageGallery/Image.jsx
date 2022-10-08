import React from 'react'
import { useState,useEffect } from 'react'
import ImageCard from '../components/ImageCard';
import ImageSearch from '../components/ImageSearch';
import { BsMoonStarsFill } from "react-icons/bs";



const Image = () => {
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [term,setTerm]= useState(''); // for image searching
    const [darkMode,setDarkMode] = useState(false);

    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=8768218-c2a04f45f7ee8e655781103a6&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json()).then(data=>{
            setImages(data.hits);
            setIsLoading(false);
        }).catch(err=>console.log(err));
    },[term]);

  return (
    
    <div>
     
    <div className={darkMode ? "dark": "" }>
    <div className='container mx-auto dark:bg-slate-700'>
        <ImageSearch searchText={(text)=>setTerm(text)} />
        {isLoading? <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1> : <div className='lg:grid lg:grid-cols-3 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-3 '>
            {images.map(image=>(
                <ImageCard key={image.id} image={image}/>
            ))}
        </div>}
    </div>
    </div>
    </div>
    
    
  );
}

export default Image