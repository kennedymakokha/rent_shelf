import React from 'react'

function ImageWrap({ details }) {
    return (
        <div className="flex flex-wrap w-full">

            {details.files.map((file, i) => (
                <div key={i} className='w-1/4 h-[250px]    p-2'>
                    <div className='bg-slate-500 w-full h-full'>
                        <img src={file} alt="" className='w-full rounded-sm h-full object-cover' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageWrap