/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
function OwnerCard({ reveal, data, RevealContact }) {
    return (
        <div className='flex w-full shadow-2xl	 bg-white rounded-md h-[200px] border border-slate-50 flex-col'>
            <div className='flex items-center justify-center mt-10  flex-col w-full px-2 gap-y-10 '>
                <div className="flex flex-row w-full gap-x-2 items-center ">
                    <div className="flex   w-10 h-10 border items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </div>
                    <div className=''>
                        <h2 className='text-[18px] text-slate-400 font-semibold'> {data?.createdBy?.name}</h2>
                        <h2 className='text-[14px] gap-x-2'><span className='text-secondary-100 font-bold'>On space since</span>{moment(data?.createdAt).format("Do MMM YYYY")}</h2>
                    </div>

                </div>
                <div className='text-[20px] group relative z-0  gap-x-2 items-center flex justify-center font-bold  w-[80%] h-10  px-2 rounded-md  border-[#00b53F]'>
                    <div className='flex items-center w-full border-primary-100 absolute border px-2  rounded-md justify-center z-10'>
                        {data?.createdBy?.phone}
                    </div>
                    <div onClick={RevealContact} className={`flex items-center inset-0 group-hover:bg-secondary-100 rounded-md bg-primary-100 group-hover:text-slate-100 text-white ${!reveal ? "flex" : "hidden"} absolute justify-center z-10`}>
                        <h2>Reveal  Contact </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerCard