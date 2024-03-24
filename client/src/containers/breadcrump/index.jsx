import React from 'react'
import Breadcrump from './breadcrump'

function index(props) {
    return (

        <div className="bg-gray-400 w-full h-[200px] relative z-0">
            <img src={props?.backDrop} alt='' className='w-full h-full object-cover ' />
            <div className="absolute top-0 left-0 w-full  h-full opacity-40 bg-black z-4">

            </div>
            <div className="absolute w-auto px-6 py-6 h-6 left-10   top-28  shadow-md opacity-70  text-primary-100 bg-white  flex justify-center items-center z-40">
                {props.title}
            </div>
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