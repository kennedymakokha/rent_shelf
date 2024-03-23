import React from 'react'
import Address from './address';



function index({ data }) {

    return (
        <div className=' w-full sm:min-h-[200px] min-h-[250px] h-auto bg-white rounded-md shadow-2xl  flex flex-col '>
            <Address data={data} />
        </div>
    )
}

export default index



