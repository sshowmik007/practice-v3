import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsMoonStarsFill } from "react-icons/bs";

const DataFetch = () => {
    const [myData,setMyData] = useState([]);
    const [darkMode,setDarkMode] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>
        setMyData(response.data));
    } , []);
   
  return (
    <div >       
        <div>
             <BsMoonStarsFill className='cursor-pointer text-2xl m-10' onClick={()=>setDarkMode(!darkMode) }/>
        </div>
                 
<div className={darkMode ? "dark": "" } >
    <div className='dark:bg-slate-200'>

       {myData.map((post)=>{
        const {id,title,body} = post;
        return (
            <div className='overflow-hidden container px-5 py-2 mx-auto flex flex-wrap -m-1  ' >
                <div key={id} className="m-auto block p-10 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 " >  
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> {title} </h2>
                <p className='font-normal text-gray-700 dark:text-gray-400'> {body} </p>
            </div>
            </div>

        );
       })}
    </div>
       </div>
    </div>
  )
}

export default DataFetch