import React from 'react'

function ImageWrap({ details }) {
    return (
        <div className="flex flex-wrap w-full">

            {details.files.map((file, i) => (
                <div key={i} className='w-1/4 h-[250px]    p-2'>
                    <div className='bg-slate-50 w-full h-full'>
                        <img src={file} alt="" className='w-full scale-90 hover:scale-100 ease-in duration-500 rounded-sm h-full object-cover' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImageWrap