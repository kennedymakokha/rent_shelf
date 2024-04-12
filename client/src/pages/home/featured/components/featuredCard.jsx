import React from 'react'
import { Ratings } from '../../../../utils/multiple'
import Bottom, { Bottom1 } from './bottom'
import Pricebadge from '../../../../containers/pricebadge'
import { Link } from 'react-router-dom'
function FeaturedCard(props) {

    return (

        <Link state={props.featured} to={`/shelves/${props?.featured?.name?.replace(/\s+/g, "-").toLowerCase()}`} className="sm:w-1/5 w-full  h-full group shrink-0  p-2 flex justify-center items-center">

            <div className=" w-full h-full relative z-0 rounded-md shadow-2xl">
                <img src={props?.featured?.files[0]} alt='' className='w-full h-full object-cover rounded-md' />
                {/*  */}
                {!props.hide && <Bottom text={props.featured.featured ? "text-secondary-100" : props.text} bg={props.featured.featured ? 'bg-primary-100' : props.bg} featured={props.featured} />}

                {!props.noPriceBadge ?
                    <>
                        {props.featured.featured && < div className="absolute  bg-black flex-col gap-y-2 transition duration-50 fade-in opacity-60 hidden top-0  w-full h-[64%] rounded-t-md group-hover:flex justify-center px-0 items-center z-20  ">
                            <ul className='px-2'>
                                {props?.featured?.features?.slice(0, 5).map((feature, i) => (
                                    <li key={i} className='text-sm text-white flex flex-row gap-x-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-2 h-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        {feature.name}</li>
                                ))}
                            </ul>
                            <div className='flex flex-row flex-wrap gap-2 border-t p-2'>
                                {props?.featured?.types?.slice(0, 10).map((type, i) => (<div key={i} className=' px-2 text-sm text-white text-center border rounded-md border-secondary-100'>{type.name}</div>))}
                            </div>
                        </div>}
                    </> : <Bottom1 featured={props.featured} />
                }
                {!props.noPriceBadge && <Pricebadge noPrice={props.noPrice} feature={props.feature} opp={props.opp} featured={props?.featured} />
                }


                <div className="absolute inset-0 flex justify-center items-center -z-1 bg-black opacity-20 rounded-md">

                </div>
            </div>

        </Link >

    )
}




export default FeaturedCard