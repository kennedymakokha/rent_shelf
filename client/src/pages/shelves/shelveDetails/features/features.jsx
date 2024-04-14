import React from 'react'
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../../../containers/titleContainer';
import { socials } from '../details/socialItems';
import SocialItem from '../details/socialItem';



function Features({ data }) {
    const { features } = data

    return (
        <>
            <div className=' px-2 flex w-full items-center flex-row h-20 justify-between'>
                <div className='flex   rounded-sm px-2  items-center justify-between'>
                    <TitleContainer title="Features" />

                </div>
                <div className='sm:flex hidden w-1/2 items-center  justify-end'>

                </div>
            </div>
            <div className='flex flex-col sm:flex-row px-6 pb-10  gap-y-4 w-full sm:flex-wrap'>
                {features.map((feat, i) => (
                    <div className='flex items-center gap-x-2 flex-row px-6 sm:w-1/3 w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-primary-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {feat}
                    </div>
                ))}
                {/*  <div className='flex flex-row px-6 w-1/3'>
                    {user_id?.phone}
                </div>
                <div className='flex flex-row px-6 w-1/3'>
                    {user_id?.email}
                </div> */}
            </div>

        </>

    )
}

export default Features



