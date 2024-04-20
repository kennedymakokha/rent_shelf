/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function RateCard({ setshow, setrRatingsshow }) {

    return (
        <div onClick={() => setrRatingsshow(true)} className='flex w-full shadow-2xl	h-[40px] bg-white rounded-md  border border-slate-50 '>
            <div className='w-1/2 p-1 h-full '>
                <div className='w-full h-full flex items-center justify-center text-secondary-100 border-secondary-100 border rounded-md text-[18px] font-bold'>
                    Rate Us
                </div>
            </div>
            <div className='w-1/2 p-1 h-full ' onClick={() => setshow(true)}>
                <div className='w-full h-full flex items-center justify-center border-red-900 border text-red-900 rounded-md text-[18px] font-bold'>
                    <h2>Report an Abuse</h2>
                </div>
            </div>
        </div>
    )
}

export default RateCard