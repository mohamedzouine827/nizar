import React from 'react'
import ScrollPicture from './ScrollPicture'
import ClientElement from './ClientElement'
import EventElement from './EventElement'

function Event() {
  return (
    <div className=' border-2 border-black w-full h-[65vh]  flex md:flex-row flex-col justify-center md:justify-between item-center px-4 text-center overflow-auto'>
        <div className='flex  items-center justify-center mt-2 mb-2 md:gap-0 md:mt-0 md:text-5xl  text-xl font-brimestone'>
            Event Work
        </div>
        <div className='flex  justify-center items-center'>
            <EventElement/>
        </div>
    </div>
  )
}

export default Event