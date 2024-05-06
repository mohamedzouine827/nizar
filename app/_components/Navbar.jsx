"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

function Navbar() {

    {/* grid section but without the rounded edges*/}

    const route = usePathname();

    const sectionNav = [
        {
            id: 1,
            name : "About",
            path : "/about"
        },
        {
            id: 2,
            name : "Work",
            path : "/work"
        },
        {
            id: 3,
            name : "Contact",
            path : "/contact"
        },
    ]
    
  return (
    <section className='flex flex-row justify-between items-center'>
        <Link href="/">
         <h1 className="font-ko text-3xl">Nizar Abdelkarim</h1></Link>
         <div className='invisible md:visible flex flex-row w-96 justify-between '>
            {sectionNav.map((item) => (
                
                <div key={item.id}>
                    <Link href={item.path}>
                    <div className={` font-brimestone hover:text-black ${(item.path == route)? `text-black` : `text-gray-600`} transition-all duration-300 ease-in-out`}>{item.name}</div>
                    </Link>
                </div>
                
            ))}
         </div>
    </section>
  )
}

export default Navbar