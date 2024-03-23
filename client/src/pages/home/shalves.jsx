import React from 'react'
import TitleContainer from '../../containers/titleContainer'
import { FeaturedArray } from '../data'
import Contents from './contents'
import FeaturedCard from './featured/components/featuredCard'

function index() {
    return (

        <Contents bg="bg-white">
            <div className="flex w-full h-[400px] flex-col  ">
                <TitleContainer title="Shelves You may Like 😜" />
                <div className=' pt-2 bg- w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                    {FeaturedArray.map((featured, i) => (
                        <FeaturedCard key={i} opp feature text="text-primary-100" bg="bg-slate-100" featured={featured} />
                    ))}
                </div>
            </div>
        </Contents>
    )
}

export default index