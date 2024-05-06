
import Image from 'next/image'
import React from 'react'
import Picture1 from "@/public/work/streetphotography/stret.jpg"
import Picture2 from "@/public/work/streetphotography/streer1.jpg"
import Picture3 from "@/public/work/streetphotography/street2.jpg"
import Picture4 from "@/public/work/streetphotography/oka1.jpg"
import Picture5 from "@/public/work/streetphotography/oka2.jpg"
import Picture6 from "@/public/work/streetphotography/oka3.jpg"
import Picture7 from "@/public/work/streetphotography/oka4.jpg"
import Picture8 from "@/public/work/streetphotography/oka5.jpg"
import Picture9 from "@/public/work/streetphotography/oka6.jpg"
import Picture10 from "@/public/work/streetphotography/oka7.jpg"
import Picture11 from "@/public/work/streetphotography/oka8.jpg"
import Picture12 from "@/public/work/streetphotography/oka10.jpg"
import Picture13 from "@/public/work/streetphotography/oka12.jpg"

function ScrollPicture() {

    const Pictures = [
        {
            id : 1,
            picture : Picture1,
            desc : "Picture 1"
        },
        {
            id : 2,
            picture : Picture2,
            desc : "Picture 2"
        },
        {
            id : 3,
            picture : Picture3,
            desc : "Picture 3"
        },
        {
            id: 4,
            picture : Picture4,
            desc : "Picture 4",
        },
        {
            id: 5,
            picture : Picture5,
            desc : "Picture 5",
        },
        {
            id: 6,
            picture : Picture6,
            desc : "Picture 6",
        },
        {
            id: 7,
            picture : Picture7,
            desc : "Picture 7",
        },
        {
            id: 8,
            picture : Picture8,
            desc : "Picture 8",
        },
        {
            id: 9,
            picture : Picture9,
            desc : "Picture 9",
        },
        {
            id: 10,
            picture : Picture10,
            desc : "Picture 10",
        },
        {
            id: 11,
            picture : Picture11,
            desc : "Picture 11",
        },
        {
            id: 12,
            picture : Picture12,
            desc : "Picture 12",
        },
        {
            id: 13,
            picture : Picture13,
            desc : "Picture 13",
        },
    ]
    return (
        <div className='border-2 md:h-[55vh] md:w-[25vw] w-[65vw] h-[60vh] overflow-auto'>
            {Pictures.map((element, index) => (
                <div key={element.id } className='mb-2 border-2 border-black w-full flex flex-col items-center h-fit'>
                <Image  alt={element.desc} src={element.picture} priority={index === 0}/>
                </div>
            ))}
            
        </div>
    )
}

export default ScrollPicture