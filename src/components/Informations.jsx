import React from 'react'
import Urban1 from '../assets/urban1.png';
import Urban2 from '../assets/urban2.png';
import Urban3 from '../assets/urban3.png';
import Urban4 from '../assets/urban4.png';
import Urban5 from '../assets/urban5.png';
import Urban6 from '../assets/urban6.png';
const Informations = () => {
  return (
    <section>
        <div>
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
        {/* Cards */}

        <div className='lg:flex gap-10'>
                
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center m-5'>
                <img src={Urban1} alt="" className=''/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint unde perferendis numquam earum suscipit.</p>
                <h4 className='py-4 text-teal-600'>Design Tools I Used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>React</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center m-5 '>
                <img src={Urban2} alt="" className=''/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint unde perferendis numquam earum suscipit.</p>
                <h4 className='py-4 text-teal-600'>Design Tools I Used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>React</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 flex flex-col justify-center items-center m-5'>
                <img src={Urban3} alt="" className=''/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Design</h3>
                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint unde perferendis numquam earum suscipit.</p>
                <h4 className='py-4 text-teal-600'>Design Tools I Used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>React</p>
                <p className='text-gray-800 py-1'>Figma</p>
            </div>

        </div>
    </section>
  )
}

export default Informations