
import Image from 'next/image'
import React from 'react'
import Picture1 from "@/public/work/client/event/IMG_0995.jpg"
import Picture2 from "@/public/work/client/event/IMG_1008.jpg"
import Picture3 from "@/public/work/client/event/IMG_1010.jpg"
import Picture4 from "@/public/work/client/event/IMG_1060.jpg"
import Picture5 from "@/public/work/client/event/IMG_1096.jpg"
import Picture6 from "@/public/work/client/event/IMG_0985.jpg"
import Picture7 from "@/public/work/client/event/IMG_9674.jpg"


function EventElement() {

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
        }
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

export default EventElement