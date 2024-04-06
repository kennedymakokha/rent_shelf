import React, { useEffect, useState } from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { Multiple } from '../../utils/multiple'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'
import { useSelector } from 'react-redux'
import { HandleConsole } from '../../utils/selectFromapi.jsx'
import { useNavigate } from 'react-router-dom'

function index() {

    const { data, refetch, isFetching, isSuccess, isLoading } = useFetchshelvesQuery(true)
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)
    useEffect(() => {
      
         if (userInfo && userInfo.role === "admin") {
            navigate('admin')
        } else {
            return
        }
    })
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