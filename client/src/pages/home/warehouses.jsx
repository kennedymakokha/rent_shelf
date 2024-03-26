import React from 'react'
import TitleContainer from '../../containers/titleContainer'
import { WarehouseArray } from '../data'
import Contents from './contents'
import { Link } from 'react-router-dom'
import FeaturedCard from './featured/components/featuredCard'
import ScrollRight from './featured/scrollRight'

function index(props) {
    return (
        <>
            <ScrollRight goTo='/warehouse' data={props.data} isFetching={props.isFetching}  left title="Warehouse" noPrice array={WarehouseArray} text="text-white" bgcontainer="bg-slate-100" bg="bg-primary-500"  />


         
        </>
    )
}

export default index