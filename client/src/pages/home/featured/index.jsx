import React from 'react'
import FeaturedCard from './components/featuredCard'
import Contents from '../contents'
import TitleContainer from '../../../containers/titleContainer'
import { FeaturedArray } from '../../data'
import { Link } from 'react-router-dom'

function index(props) {
    return (<>
        <Contents bg="bg-slate-100">
            <div className="flex w-full h-[400px] flex-col bg-slate-100 ">
                <TitleContainer title="Featured Shelves" />
                <div className='bg- w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                    {FeaturedArray.filter(e => e.featured).map((featured, i) => (
                        // <Link state={featured} to={`/shelves/${featured?.title.replace(/\s+/g, "-").toLowerCase()}`} className="sm:w-1/5 w-full  h-full group shrink-0  p-2 flex justify-center items-center">
                            <FeaturedCard key={i} showDetails featured={featured} />
                        // </Link>
                    ))}
                </div>
            </div>
        </Contents>

    </>

    )
}

export default index