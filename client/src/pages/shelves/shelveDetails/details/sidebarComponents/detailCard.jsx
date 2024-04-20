/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import What from './../../../../../assets/wat.webp'
function DetailCard({ data }) {
    return (
        <div className='flex w-full shadow-2xl	 bg-white rounded-md h-[200px] border border-slate-50 flex-col'>
            <div className='flex items-center justify-center mt-2  flex-col w-full px-2 gap-y-1 '>
                {data.price ? <h2 className='text-[20px] text-slate-400 font-bold'> Ksh {data.price}/-</h2> : <div
                    className='text-[20px] text-primary-400 font-bold border  px-2 rounded-md  border-secondary-100'
                >Contact for price</div>}
                <div className=' mb-10 text-slate-400 flex-col justify-center items-center   flex text-[16px]'>
                    <div>{data.area.split('+').join(' ')}<span className='text-slate-600'>({data.town_id.name})</span></div>
                    <div>{data.building}</div>
                   

                </div>
                <div
                    className='text-[20px] text-[#00B53F] gap-x-2 items-center flex justify-center font-bold border w-[80%]  px-2 rounded-md  border-[#00b53F]'
                >
                    <div className='flex items-center justify-center'>
                        <img src={What} className='w-5 h-5 flex items-center' alt="" />
                    </div>

                    Chat on whatsap</div>
            </div>
        </div>
    )
}

export default DetailCard