import React from 'react'



function EditedVideo() {
    const videoContent = [
        {
            id : 1,
            path : "/work/editing/sapp.mp4",

        },
        {
            id: 2,
            path : "/work/editing/sapp1.mp4"
        },

        {
            id: 3,
            path : "/work/editing/sapp3.mp4"
        },
    ]
  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-2'>
        {videoContent.map((content) => (
            <div key={content.id} className='md:w-[15vw] w-[40vw] h-[30vh] md:h-[52.2vh] border-2 border-black'>
                <video playsInline muted autoPlay loop src={content.path} className='flex w-full h-full' />
            </div>
        ))}
        
    </div>
  )
}

export default EditedVideo