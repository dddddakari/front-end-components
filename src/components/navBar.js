import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div>
      <nav className='bg-red-900 flex justify-between items-center p-3'>
        <div className='flex items-center space-x-4 pl-24'>
          <Image className='pb-3 pr-3'
            src="/sait.png"
            alt="SAIT Logo" 
            width={70}
            height={1}
          />
          <h1 className='text-white text-6xl pl-5 font-extrabold'>SAIT</h1>
        </div>
        <div className='flex items-center pl-4 pr-24'>
          <input 
            type='text' 
            placeholder='Search' 
            className='p-4 rounded-lg text-black w-96' 
          />
          <ul className='flex space-x-4 pl-4 font-extrabold text-2xl'>
            <li className='text-white'>Home</li>
            <li className='text-white'>About</li>
            <li className='text-white'>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;