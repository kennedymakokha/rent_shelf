
import { truncateString } from '../../../utils/trancatString';
import { DetailItem, RateItem, Title } from './items'
// import Contents from './../../../'

function Details({ details }) {
    return (
        // <Contents
        //     bg="bg-slate-50">

        <div className='flex w-full sm:min-h-[360px]  border flex-col border-dotted border-primary-700  rounded-md p-2'>
            <div className='w-full border-b border-dotted flex-wrap px-2  border-slate-300 sm:flex-row flex-col pb-2 flex '>
                <div className='sm:w-[50%] px-2 w-full sm:border-r items-center flex-col flex'>
                    <Title title="Details" />

                    <div className='flex w-full border border-slate-300 p-2 flex-col'>
                        <DetailItem label="Name" value={truncateString(details?.name, 100)} />
                        <DetailItem label="Town" value={truncateString(details?.town_id.name, 20)} />
                        <DetailItem label="Area" value={truncateString(details?.area?.split('+').join(' '), 100)} />
                        <DetailItem label="Building" value={details?.building} />
                        <DetailItem label="Price" value={details?.price} />
                    </div>
                </div>
                <div className='sm:w-[50%] w-full sm:border-r items-center flex-col flex'>
                    <Title title="features" />
                    <div className='flex flex-col text-[18px] px-2 w-full'>
                        <div className='flex flex-wrap w-full  gap-1'>
                            {details?.features?.map((type, i) => (
                                <div key={i} className='flex font-normal px-2 text-slate-400 border border-slate-200 rounded-md  items-center justify-center '>{type.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='sm:w-[50%] px-2 w-full  items-center flex-col flex'>
                    <Title title="Types" />
                    <div className='flex border border-slate-300 p-2 flex-col text-[18px] px-2 w-full'>
                        <div className='flex flex-wrap gap-1'>
                            {details?.type_id?.map((type, i) => (
                                <div key={i} className='flex font-normal px-2 text-slate-400 border rounded-md items-center justify-center '>{type.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[50%] px-2 sm:flex flex-col hidden    '>
                    <Title title="Ratings" />
                    <div className='flex border border-slate-300 p-2 flex-col px-2 gap-y-2  '>
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
                        <h2 className='capitalize text-[18px] font-bold'>Description</h2>
                        <p className='text-slate-400 text-[18px]'>{details?.description}</p>
                    </div>

                </div>
            </div>
        </div>
        // </Contents>
    )
}

export default Details
Details.propTypes = Object;