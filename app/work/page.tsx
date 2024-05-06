import React from 'react'
import StreetPhotograper from '../_components/About/StreetPhotograper'
import Editing from '../_components/About/Editing'
import FilmMaking from '../_components/About/FilmMaking'
import Client from '../_components/About/Client'
import Event from '../_components/About/Event'

function page() {
  return (
    <div className='mt-6 flex flex-col gap-3'>
        <h1 className='text-xl font-brimestone mb-6'>Services</h1>
        <StreetPhotograper/>
        <Client/>
        <Event/>
        <Editing/>
        <FilmMaking/>
        
    </div>
  )
}

export default page