import React from 'react'
import Urban1 from '../assets/urban1.png';
import Urban2 from '../assets/urban2.png';
import Urban3 from '../assets/urban3.png';
import Urban4 from '../assets/urban4.png';
import Urban5 from '../assets/urban5.png';
import Urban6 from '../assets/urban6.png';

const Gallary = () => {
  return (
    <section>
            <div className='flex flex-col p-10 items-center justify-center'>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-base py-2 leading-8 text-gray-800'>
                Lorem ipsum dolor sit amet consectetur, <span className='text-teal-500'>adipisicing elit. </span> Itaque natus culpa animi ratione, nobis esse fugiat eos earum quisquam
                <span className='text-teal-500'> harum </span>  asperiores temporibus quasi ipsum ab accusantium expedita perspiciatis rerum et.
            </p>
            <p className='text-base py-2 leading-8 text-gray-800'>
                Lorem ipsum dolor sit amet consectetur, <span className='text-teal-500'>adipisicing elit. </span> Itaque natus culpa animi ratione, nobis esse fugiat eos earum quisquam
                <span className='text-teal-500'> harum. </span>  
            </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-10 p-auto md:flex md:flex-row md:flex-wrap'>
            <div  className='basis-1/4 ' >
                <img src={Urban1} alt="" />
            </div>
            <div  className='basis-1/4 '>
                <img src={Urban2} alt="" />
            </div>
            <div  className='basis-1/4 '>
                <img src={Urban3} alt="" />
            </div>
            <div  className='basis-1/4 '>
                <img src={Urban4} alt="" />
            </div>
            <div  className='basis-1/4 '>
                <img src={Urban5} alt="" />
            </div>
            <div  className='basis-1/4 '>
                <img src={Urban6} alt="" />
            </div>
        </div>
        
    </section>
    
  )
}

export default Gallary