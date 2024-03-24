import React from 'react'
import Contents from '../contents'
import FeaturedCard from './components/featuredCard'
import TitleContainer from '../../../containers/titleContainer'
import { Link } from 'react-router-dom'

function ScrollRight(props) {
    return (
        <Contents bg={props.bgcontainer}>
            <div className={`flex w-full h-[400px] ${props.bgcontainer} flex-col`}>
                <div className={`flex flex-row items-center ${props.goTo ? "justify-between" : "justify-center"}`}>
                    <TitleContainer title={props.title} />
                    {props.goTo && < div className='bg-secondary-100 hover:bg-primary-100 px-2 shadow-2xl rounded-md text-slate-200 hover:text-white'>
                        <Link to={props.goTo}>Go to Our warehouses </Link>
                    </div>}
                </div>
                <div class="bg-transparent w-full h-full relative z-0">
                    <div className=' w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                        {props.array.map((featured, i) => (
                            <FeaturedCard noPrice={props.noPrice} left={props.left} opp={props.opp} feature={props.feature} key={i} text={props.text} bg={props.bg} showDetails={props.showDetails} featured={featured} />
                        ))}
                    </div>
                    {props.array.length > 5 && <div class="absolute  top-[40%]  right-10 flex justify-between items-between z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>}
                </div>

            </div>
        </Contents >
    )
}

export default ScrollRight