/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Contents from '../../../home/contents';
function Slider({ data, active, setActive }) {
    return (

        <div className=' w-full h-full  flex flex-row  overflow-x-hidden scrollbar-hide'>
            <div className="w-full relative z-0 shrink-0 h-[400px] bg-red-100">
                <img src={data.files[active]} className='h-full w-full object-cover' alt="" />
                <div className="absolute bottom-1   h-14 w-full px-10 z-20 flex sm:hidden items-center justify-center">

                    {data.files.map((file, i) => (
                        <div key={i} className={`relative  h-full w-1/4 ${active === i && "border border-2 border-white"} bg-slate-50 shrink-0  `}>
                            <img src={file} className=' h-full w-full shrink-0 object-cover ' />
                            {data.files.length > 3 && i === 3 && <div className="absolute inset-0 z-30 bg-black opacity-50 text-white items-center justify-center flex ">
                                +{data.files.length - 4}
                            </div>}
                        </div>
                    ))}

                </div>
                {data.files.length - 1 !== active && <div onClick={() => setActive(prev => prev + 1)} className="absolute right-2 top-[50%]  h-10 z-10 flex items-center justify-center">
                    <div className='bg-primary-100 rounded-full h-full flex items-center justify-center  h-[40px]  w-[40px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-secondary-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>}
                {active !== 0 && <div onClick={() => setActive(prev => prev - 1)} className="absolute left-2 top-[50%]   h-10 z-10 flex items-center justify-center">
                    <div className='bg-primary-100 rounded-full h-full flex items-center justify-center  h-[40px]  w-[40px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-secondary-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>

                    </div>
                </div>}
                <div onClick={() => setActive(prev => prev + 1)} className="absolute right-2 bottom-[5%]  h-10 z-44 flex items-center justify-center">
                    <div className=' h-full flex items-center justify-center gap-x-1  h-[40px]  w-[40px]'>
                        <div className='flex flex-row text-white text-sm '><span>{active + 1}</span>  /{data.files.length}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Slider