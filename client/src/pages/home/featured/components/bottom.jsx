import React from 'react'
import { Ratings } from '../../../../utils/multiple'

function Bottom(props) {
    return (
        <div className={`absolute bottom-0 flex  rounded-b-md h-auto py-6  w-full justify-center flex-row ${props.bg ? props.bg : "bg-secondary-100"} items-center z-10`}>
            <div className='w-full h-full rounded-tl-md flex flex-col   px-2 justify-center items-center '>
                <span className={`font-bold  flex justify-center  ${props.text ? props.text : "text-primary-900"}  px-1 gap-x-1 items-center`}>
                    {props?.featured?.name}</span>
                <span className={`font-bold  flex justify-center text-[12px]  ${props.text ? props.text : "text-primary-900"} px-1 gap-x-1 items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-primary-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    {props?.featured?.area_id?.name} {props?.featured?.town_id?.name}</span>
                <Ratings row count={props?.featured?.ratings} />
            </div>
        </div >
    )
}

export function Bottom1(props) {
    return (
        < div className="absolute  bg-black flex-col gap-y-2 transition duration-50 fade-in opacity-80  bottom-0  w-full h-auto flex justify-center px-0 items-center z-40  ">
            <div className='w-full h-full rounded-tl-md flex flex-col   px-2 justify-center items-center '>
                <span className={`font-bold  flex justify-center  ${props.text ? props.text : "text-primary-900"}  px-1 gap-x-1 items-center`}>
                    {props?.featured?.title}</span>
                <span className={`font-bold  flex justify-center text-[8px]  ${props.text ? props.text : "text-primary-900"} px-1 gap-x-1 items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-primary-900">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    {props?.featured?.address?.area} {props?.featured?.address?.location}</span>
                <Ratings row count={props?.featured?.ratings} />
            </div>

        </div>
    )
}


export default Bottom