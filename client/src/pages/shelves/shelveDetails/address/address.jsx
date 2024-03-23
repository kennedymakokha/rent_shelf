import React from 'react'
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../../../containers/titleContainer';
import { socials } from '../details/socialItems';
import SocialItem from '../details/socialItem';



function Address({ data }) {


    return (
        <>
            <div className=' px-2  flex w-full items-center flex-row h-20 justify-between'>
                <div className='flex   rounded-sm px-2  items-center justify-between'>
                    <TitleContainer title="Address" />

                </div>
                <div className='sm:flex hidden w-1/2 items-center  justify-end'>
                    <div className={`flex-row px-2  rounded-md shadow-2xl justify-center items-center text -white bg-secondary-100 gap-x-1 font-bold text-2xl flex transition duration-50 fade-in`} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <span className='text-white'> Find Location</span>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-y-2 px-6 w-full'>
                <div className='flex sm:text-[20px] text-slate-400 text-[18px] w-1/3'>
                    {data?.user_id?.name}
                </div>
                <div className='flex sm:text-[20px] text-slate-400 text-[18px] w-1/3'>
                    {data?.user_id?.phone}
                </div>
                <div className='flex sm:text-[20px] text-slate-400 text-[18px] w-1/3'>
                    {data?.user_id?.email}
                </div>
            </div>

        </>

    )
}

export default Address



