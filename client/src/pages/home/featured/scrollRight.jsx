import React from 'react'
import Contents from '../contents'
import FeaturedCard from './components/featuredCard'
import TitleContainer from '../../../containers/titleContainer'
import { Link } from 'react-router-dom'
import { Multiple } from '../../../utils/multiple'
import ContentLoader, { Facebook } from 'react-content-loader'
import { HandleConsole } from '../../../utils/selectFromapi'


const MyLoader = () => (

    <div className="w-[300px] h-[400px] relative z-0">
        <div className='w-full flex items-center justify-center shrink-0 w-full h-full border border-slate-100 rounded-[20px]'>

            <ContentLoader viewBox="0 0 80 106">

                <rect x="0" y="0" rx="5" ry="5" width="80" height="106" />

            </ContentLoader>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
            <p className="text-xl font-semibold">Loading...</p>
        </div>
    </div>

)
function ScrollRight(props) {
    console.log(props.data)
    return (
    
        <Contents bg={props.bgcontainer}>
            <div className={`flex w-full h-[400px] ${props.bgcontainer} flex-col`}>
                <div className={`flex flex-row items-center ${props.goTo ? "justify-between" : "justify-center"}`}>
                    <TitleContainer title={props.title} />
                    {props.goTo && < div className='bg-secondary-100 hover:bg-primary-100 px-2 shadow-2xl rounded-md text-slate-200 hover:text-white'>
                        <Link to={props.goTo}>Go to Our warehouses </Link>
                    </div>}
                </div>

                <div className="bg-transparent w-full h-full relative z-0">
                    <div className=' w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                        {props?.data !== undefined && props?.data?.map((featured, i) => (
                            <FeaturedCard noPrice={props.noPrice} left={props.left} opp={props.opp} feature={props.feature} key={i} text={props.text} bg={props.bg} showDetails={props.showDetails} featured={featured} />
                        ))}
                    </div>
                    {props?.array?.length > 5 && <div className="absolute  top-[40%]  right-10 flex justify-between items-between z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>}
                </div>
                {/* } */}

            </div>
        </Contents >
    )
}
export function ScrollImagesRight(props) {
    return (
        <div className={`flex w-full h-[400px] ${props.bgcontainer} flex-col`}>
            <div className="bg-transparent w-full h-full relative z-0">
                <div className=' w-full h-full  flex flex-row overflow-x-scroll scrollbar-hide'>
                    {props.array.map((featured, i) => (
                        <img key={i} alt='' src={featured} className='h-full object-cover' />
                    ))}
                </div>
                {props.array.length > 0 && <div className="absolute  top-[40%]  right-10 flex justify-between items-between z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>}
            </div>
        </div>

    )
}

export default ScrollRight