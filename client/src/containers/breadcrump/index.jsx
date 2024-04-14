import React from 'react'
import Breadcrump from './breadcrump'

function index(props) {
    return (

        <div className="bg-gray-400 w-full h-[200px] relative z-0">
            <img src={props?.backDrop} alt='' className='w-full h-full object-cover ' />
            <div className="absolute top-0 left-0 w-full  h-full sm:opacity-70 opacity-10 sm:bg-black bg-white z-4">

            </div>

            <div className={`absolute sm:w-[26%]  w-[80%]   
             ${props.detailed ? "sm:top-4 top-6  sm:left-[10%] left-10  shadow-md opacity-90  text-white bg-black" : "sm:top-28 top-40  sm:left-10 -left-20  shadow-md opacity-90  shadow-md   text-primary-100 bg-white   flex justify-center items-center"}    z-40`}>
                <div className={`absolute  text-center   ${props.detailed ? "text-secondary-100 sm:text-2xl font-semibold tracking-wider  text-xl  " : "text-black bg-white opacity-60 sm:rounded-bl-[5px] sm:rounded-tr-[5px] sm:py-2 px-3 text-2xl font-bold capitalize"} sm:px-10 px-2 flex-col  flex justify-center items-center z-44`}>
                    <span>{props.detailed ? props.detailed?.name : props.title}</span>
                </div>
            </div>
            {props.detailed && <div className="absolute sm:w-[26%]  w-[100%]  sm:left-40  left-10   top-[30%]  shadow-md opacity-90  text-white bg-black   z-40">

                {props.detailed && <div className="absolute      text-white  gap-x-2 sm:gap-y-2  flex justify-center items-center z-44">
                    <span className='flex gap-x-1 justify-center items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                        {props.detailed.town_id?.name}</span>
                    <span className='flex gap-x-1 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
                        </svg>
                        {props.detailed.area_id?.name}</span>
                    <span className='flex gap-x-1 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        {props.detailed.price}</span>

                </div>}

            </div>}
            <div className="absolute -bottom-6  sm:right-20 right-[15%] flex justify-center items-center z-10">
                <Breadcrump paths={props.paths} />
            </div>
        </div>

        // <div className=" w-full h-[200px] relative z-10   shadow-2xl">
        //     <img src={props?.backDrop} alt='' className='w-full h-full object-cover ' />
        //     <div className="absolute bottom-[10%] right-20 flex   h-full  w-full justify-center flex-row  items-center z-10">

        //         <Breadcrump />

        //     </div>
        // </div>
    )
}

export default index