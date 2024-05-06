import React from 'react'
import Profile from "@/public/work/pdp.jpg"
import Image from 'next/image'
import { TableDemo } from '../_components/Information'

function page() {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center md:justify-between mt-12'>
        <div className='w-[60vw] md:w-[40vw] h-[55vh] md:h-[76vh] bg-black'>
        <Image src={Profile} alt='hello' className='w-full h-full' width={4000} height={4000}/>
        </div>
        <div className='w-[80vw] md:w-[50vw]'>
            <TableDemo/>
        </div>
    </div>
  )
}

export default page