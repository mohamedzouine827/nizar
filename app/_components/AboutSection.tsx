"use client";
import React, { useEffect, useState } from 'react';
import Pdp from "@/public/work/pdp.jpg";
import Image from 'next/image';
import Link from 'next/link';

function AboutSection() {
  const [hoverElement, setHoverElement] = useState(false);

  useEffect(() => {
    console.log(hoverElement);
  }, [hoverElement]);

  return (
    <section className='w-full h-[35vh] md:h-[50vh] py-8 px-8 text-white justify-between items-center flex md:flex-row flex-col gap-2 bg-black'>
      <div className='group relative  w-[50vw] md:w-[20vw]'>
        <Image src={Pdp} className='w-full h-full' width={4000} height={4000} alt="profile picture" priority={true} />
        <div className={`absolute top-0 left-0 w-full h-full bg-black transition-all duration-500 ease-in-out opacity-0 ${hoverElement && 'opacity-25'}`} />
      </div>
      <div 
        onMouseEnter={() => setHoverElement(true)} // Set hoverElement to true when mouse enters
        onMouseLeave={() => setHoverElement(false)} // Set hoverElement to false when mouse leaves
        className={` bg-white h-[7vh] w-[40vw] md:w-[12vw] md:h-10 transition-all duration-500 ease-in-out hover:text-white hover:bg-neutral-900 flex items-center text-black font-ko text-lg justify-center`}
      >
        <Link href="/about">
          Know Me More!
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;
