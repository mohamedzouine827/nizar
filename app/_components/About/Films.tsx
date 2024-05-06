import React from 'react'



function Films() {
    const videoContent = [
        {
            id : 1,
            path : "/work/Filmmaking/teeeeaaaser.mp4",

        },


        {
            id: 2,
            path : "/work/Filmmaking/0506.mp4" 
        },
    ]
  return (
    <div className=' md:h-[55vh] md:w-[50vw] w-[65vw] h-[60vh] overflow-auto  flex flex-col md:flex-row gap-6 mt-2 md:gap-4 md:items-center md:mt-0'>
        {videoContent.map((content) => (
            <div key={content.id} className='md:w-[45.4vw]  w-[60vw] h-[22vh] md:h-[27.4vh] '>
                <video playsInline muted autoPlay loop src={content.path} className='flex w-full h-full border-2 border-black' />
            </div>
        ))}
        
    </div>
  )
}

export default Films