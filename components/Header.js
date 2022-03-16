import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

          {/* Logo Section */}
          <div className='relative flex items-center h-10 cursor-pointer my-auto'> 
              <Image src="https://links.papareact.com/qd3"
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
              />
          </div>

          {/* Search Section */} 
          <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
              <input className='pl-7 md:pl-5  bg-transparent outline-none flex-grow
              text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start Your Search' /> 
              <SearchIcon className='h-8 bg-red-400 text-white p-2 rounded-full hidden md:inline-flex md:mx-2'/>
          </div>
          
          {/* Right Side */}
          <div className='flex items-center space-x-4 justify-end text-gray-500 ml-5 md:ml-0'>
              <p className='hidden md:inline'>Become a host</p>
              <GlobeAltIcon className='h-6' />

              <div className='flex items-center border-2 rounded-full p-3 space-x-2'>
                 <MenuIcon className='h-6 '/> 
                 <UserCircleIcon className='h-6 '/> 
              </div>
          </div>  
          
    </header>
  )
}

export default Header