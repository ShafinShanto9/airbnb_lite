import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from 'next/router'

const Header = ({placeholder}) => {
    const [searchInput, setSeachInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter()


    //Date Range Picker Confiquration
    const  selectionRange =  {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    // Handle Date Time
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate) 
        setEndDate(ranges.selection.endDate)
    }
    // Reset Input

    const resetInput = () => {
        setSeachInput('')
    }

    // Go to Search page
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

  return (
      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

          {/* Logo Section */}
          <div onClick={()=>router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'> 
              <Image src="https://links.papareact.com/qd3"
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
              />
          </div>

          {/* Search Section */} 
          <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
              <input value={searchInput}
                onChange={(e) => setSeachInput(e.target.value)}
                className='pl-7 md:pl-5  bg-transparent outline-none flex-grow
              text-sm text-gray-600 placeholder-gray-400' type="text" placeholder={ placeholder || "Exmp -- London"} /> 
              <SearchIcon className='h-8 bg-red-400 text-white p-2 rounded-full hidden md:inline-flex md:mx-2'/>
          </div>
          
          {/* Right Side */}
          <div className='flex items-center space-x-4 justify-end text-gray-500 ml-5 md:ml-0'>
              <p className='hidden md:inline'>Become a host</p>
              <GlobeAltIcon className='h-6 animate-spin' />

              <div className='flex items-center border-2 rounded-full p-3 space-x-2'>
                 <MenuIcon className='h-6 '/> 
                 <UserCircleIcon className='h-6 '/> 
              </div>
          </div>
          
          {/* IF Search Input has value then render this screen */}
          {
              searchInput && (
                  <div className='flex flex-col col-span-3 mx-auto'>
                      <DateRangePicker
                          ranges={[selectionRange]}
                          minDate={new Date()}
                          rangeColors={['#FD5861']}
                          onChange={handleSelect}

                      />
                      <div className='flex items-center border-b mb-4'>
                          <h2 className='text-2xl flex-grow font-semibold'>Number Of Guest</h2>
                          <UsersIcon className='h-5' />
                          <input
                            value={noOfGuests}
                            min={1}
                            onChange={e => setNoOfGuests(e.target.value)}
                            type="number" className='w-12 pl-2 text-lg outline-none text-red-500' />
                      </div>

                      <div className='flex'>
                          <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                          <button onClick={search} className='flex-grow text-red-400'>Search</button>
                      </div>

                  </div>
              )
          }
          
    </header>
  )
}

export default Header

