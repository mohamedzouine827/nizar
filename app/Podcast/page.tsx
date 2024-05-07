import React from 'react'

function page() {
  return (
    <div className='mt-12'>
      <h1 className='uppercase font-brimestone text-xl'>Podcast</h1>
      <div className='mt-6 '>
          <iframe src="https://www.youtube.com/watch?v=2jya6o18uCs" className='w-[60vw] h-[60vh]' title='Podact' allowFullScreen />
      </div>
    </div>
  )
}

export default page