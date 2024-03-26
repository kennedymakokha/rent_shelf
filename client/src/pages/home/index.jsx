import React, { useEffect, useState } from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { Multiple } from '../../utils/multiple'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'

function index() {
    const [localData, setLocaldata] = useState({
        all: [], featured: []
    })
    const { data, refetch, isFetching, isLoading } = useFetchshelvesQuery(true)
    
    useEffect(() => {
        setLocaldata({
            all: data?.all,
            featured: data?.featured
        })
        console.log(isLoading)
    }, [])

    const { featured, all } = localData

    return (
        <div className='overflow-hidden'>
            <Slider />

            <Featured data={featured} isFetching={isFetching} />
            <Shelves data={all} isFetching={isFetching} />
            <Warehouse data={all} isFetching={isFetching} />



        </div>
    )
}

export default index