import React from 'react'
import TitleContainer from '../../containers/titleContainer'
import { WarehouseArray } from '../data'
import Contents from './contents'
import { Link } from 'react-router-dom'
import FeaturedCard from './featured/components/featuredCard'

function index() {
    return (

        <Contents bg="bg-slate-100">
            <div className="flex w-full h-[400px] flex-col  ">
                <div className='flex flex-row items-center justify-between'>
                    <TitleContainer title="Warehouse" />
                    <div className='bg-secondary-100 hover:bg-primary-100 px-2 shadow-2xl rounded-md text-slate-200 hover:text-white'>
                        <Link to='/warehouse'>Go to Our warehouses </Link>
                    </div>
                </div>

                <div className=' pt-2 bg- w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                    {WarehouseArray.map((featured, i) => (
                        <FeaturedCard noPrice key={i} opp  text="text-white" bg="bg-primary-500" featured={featured} />
                    ))}
                </div>
            </div>
        </Contents>
    )
}

export default index