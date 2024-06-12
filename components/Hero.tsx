import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className='mx-2 bg-black-700 relative flex flex-col'>
        <Image src={'/images/phn5.jpg'} width={850} height={500} alt='phn1' className='w-[100em] h-[60vh] m-auto'/>
        <div className="absolute bg-slate-900 z-10 px-10 py-5 rounded-md top-[50%] left-[45%]" >
            <h1 className='text-2xl text-white mb-5 md:text-4xl'>Why buy new</h1>
            <h1 className='text-3xl text-yellow-500 md:text-6xl '>when we can fix it!</h1>
        </div>
    </div>
  )
}

export default Hero