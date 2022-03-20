import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player'

const Banner = () => {
  return (
    <>
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full'> 
          <Image
              src="https://links.papareact.com/0fm"
              layout='fill'
              objectFit='cover'
        />
        
        <div className='absolute top-1/2 w-full flex items-center justify-center text-center' >
          <div className='absolute top-1/2 w-full text-center' >
              <p className='text-sm sm:text-lg'>Not Sure Where To Go? PERFECT!</p>

              <button className='text-purple-500 px-10 py-4 bg-white shadow-md rounded-full
              font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150'>I'm Flexible</button>
        </div>
        </div>
      </div>
         
    </>
  )
}

export default Banner


          {/* <div className='py-30 px-20 bg-white border-2 relative'> 
            
            <ReactPlayer
              url='https://www.youtube.com/watch?v=8U161oScmsQ'
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
              className="w-full h-full object-cover"
            />
              
          </div> */}