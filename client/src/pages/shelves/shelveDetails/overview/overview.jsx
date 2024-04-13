import React from 'react'
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../../../containers/titleContainer';
import { socials } from '../details/socialItems';
import SocialItem from '../details/socialItem';



function Overview({ data }) {

    return (
        <>
            <div className=' px-2 flex w-full items-center flex-row h-20 justify-between'>
                <div className='flex   rounded-sm px-2  items-center justify-between'>
                    <TitleContainer title="Overview(type)" />

                </div>
                <div className='sm:flex hidden w-1/4 items-center  justify-end'>
                    <div className={`flex-row bg-secondary-100 px-2 rounded-md shadow-2xl gap-x-1 font-bold text-2xl flex transition duration-50 fade-in`} >
                        {data?.price ? <span className='text-white'>Ksh {data?.price}.00</span> : <span className='text-white'> Call for price</span>}
                    </div>
                </div>
            </div >
            <div className='flex sm:flex-row flex-col gap-y-2  px-6 w-full'>
                {data?.types?.map((type, i) => (
                    <span key={i} className='w-auto flex text-primary-100 items-center justify-centter'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  flex sm:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>{type} <span className={`${data.types.length - 1 !== i ? "sm:flex hidden" : "hidden"} px-2`}>|</span></span>
                ))}
            </div>

            {/* < div className='flex flex-row px-6 w-full h-[60%]'>
    <div className='flex flex-row px-6 w-1/2 py-2  border-r border-r-secondary-100  h-[60%]'>
                    <ul className='text-primary-100'>
                        {data.features.map((feat, i) => (
                            <li>{feat}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-row px-6 w-1/2  h-[60%]'>

                </div>
            </div> */}
        </>

    )
}

export default Overview



