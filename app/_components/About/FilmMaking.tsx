import React from 'react'
import EditedVideo from './EditedVideo'
import Films from './Films';

function FilmMaking() {
   
  return (
    <div className='  border-2 border-black w-full md:h-[65vh]   flex md:flex-row flex-col justify-center md:justify-between md:item-center px-4 text-center'>
        <div className='flex  md:items-center justify-center mt-2 mb-2 md:gap-0 md:mt-0 md:text-5xl  text-xl font-brimestone'>
            Film Making
        </div>
        <div className='flex   justify-center items-center'>
            <Films/>
        </div>
    </div>
  )
}

export default FilmMaking