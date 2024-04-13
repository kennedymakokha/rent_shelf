import React from 'react'
import { DetailItem, RateItem } from './items'

function Details({ details }) {
    return (
        <div className='flex w-full border flex-col border-dotted border-primary-700  rounded-md p-2'>
            <div className='w-full border-b border-dotted border-slate-300 pb-2 flex '>
                <div className='w-[15%] items-center flex-col flex'>
                    <div>
                        <DetailItem label="Name" value={details.name} />
                        <DetailItem label="Town" value={details.town_id.name} />
                        <DetailItem label="Area" value={details.area_id.name} />
                        <DetailItem label="Building" value={details.building} />
                        <DetailItem label="Price" value={details.price} />
                    </div>
                </div>
                <div className='w-[35%] items-center flex-col flex'>
                    <div className='flex flex-col text-[14px] px-2 w-1/2'>
                        <h2 className='capitalize font-bold'>features</h2>
                        <div className='flex flex-wrap gap-1'>
                            {details?.features?.map((type, i) => (
                                <div key={i} className='flex font-normal px-2 text-slate-400 border rounded-md items-center justify-center h-6'>{type.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[25%] items-center flex-col flex'>
                    <div className='flex flex-col text-[14px] px-2 w-1/2'>
                        <h2 className='capitalize font-bold'>Types</h2>
                        <div className='flex flex-wrap gap-1'>
                            {details?.type_id?.map((type, i) => (
                                <div key={i} className='flex font-normal px-2 text-slate-400 border rounded-md items-center justify-center h-6'>{type.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[25%]  border p-2'>
                    <h2 className='capitalize text-[14px] font-bold'>Ratings</h2>
                    <div className='flex flex-col p-2 '>
                        <RateItem perc={0} rate={0} />
                        <RateItem perc={0} rate={0} />
                        <RateItem perc={0} rate={0} />
                        <RateItem perc={10} rate={2} />
                        <RateItem perc={10} rate={1} />
                    </div>
                </div>
            </div>
            <div className='flex w-full   my-1 rounded-md '>
                <div className='w-full flex '>

                    <div className='w-full   '>
                        <h2 className='capitalize text-[14px] font-bold'>Description</h2>
                        <p className='text-slate-400 text-sm'>{details?.description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details