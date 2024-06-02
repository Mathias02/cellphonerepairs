import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className='mx-2 bg-black-700 relative flex flex-col'>
        <Image src={'/images/phn4.jpg'} width={850} height={500} alt='phn1' className='w-[100em] h-[60vh] m-auto'/>
        <div className="absolute bg-slate-900 z-10 px-10 py-5 rounded-md top-[50%] left-[45%]" >
            <h1 className='text-4xl text-white mb-5'>Why buying a new one</h1>
            <h1 className='text-5xl text-yellow-400'>While we can fix it your old one</h1>
        </div>
    </div>
  )
}

export default Hero