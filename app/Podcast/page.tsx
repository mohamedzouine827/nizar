import React from 'react'

function page() {
  return (
    <div className='mt-12'>
      <h1 className='uppercase font-brimestone text-xl mb-6'>Podcast</h1>
      <div className='flex md:flex-row flex-col gap-2'>
      <div className=' aspect-video '>
          <iframe 
            src="https://www.youtube.com/embed/2jya6o18uCs" 
            width="100%" 
            className='w-[60vw] h-[60vh]' 
            title='Podact' 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
      </div>
      <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-brimestone'>Description</h1>
          <h3 >Edited & Filmed : <span className='font-brimestone '>Nizar Abdelkarim</span></h3>
          <h3 className=' px-2'>
          🎙️ *Bienvenue sur la Chaîne "Club IMPACT FST Settat" !*

Découvrez le premier podcast jamais réalisé à la Faculté des Sciences et Techniques de Settat. 🌟
          </h3>
      </div>
      </div>
    </div>
  )
}

export default page