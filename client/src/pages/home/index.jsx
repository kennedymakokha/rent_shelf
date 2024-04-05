import React, { useEffect, useState } from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { Multiple } from '../../utils/multiple'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'

function index() {

    const { data, refetch, isFetching, isSuccess, isLoading } = useFetchshelvesQuery(true)

    useEffect(() => {

    }, [])

    const urlParams = new URLSearchParams(window.location.search);
    const tutorialParam = urlParams.get('affiliate');
    console.log(tutorialParam)
    return (
        <div className='overflow-hidden'>
            <Slider />

            <Featured data={data?.featured} isFetching={!isSuccess} />
            <Shelves data={data?.all} isFetching={!isSuccess} />
            <Warehouse data={data?.all} isFetching={!isSuccess} />



        </div>
    )
}

export default index