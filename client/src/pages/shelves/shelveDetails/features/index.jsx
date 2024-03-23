import React from 'react'
import Features from './features';



function index({ data }) {

    return (
        <div className=' w-full sm:min-h-[150px] pb-5 h-auto bg-white rounded-md shadow-2xl  flex flex-col '>
            <Features data={data} />
        </div>
    )
}

export default index



