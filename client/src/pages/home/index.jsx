import React from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { Multiple } from '../../utils/multiple'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'

function index() {

    const { data, refetch, isFetching, isLoading } = useFetchshelvesQuery()
    // console.log("INDEX", data)
    return (
        <div className='overflow-hidden'>
            <Slider />

            <Featured data={data !== undefined && data} isFetching={isLoading} />
            <Shelves />
            <Warehouse />



        </div>
    )
}

export default index