import React from 'react'
import AdminLayout from '../../containers/layout/admin/adminLayout'
import { HandleConsole } from '../../utils/selectFromapi'
import { useLocation } from 'react-router-dom'
import TitleContainer from '../../containers/titleContainer'
import { Multiple, Ratings } from '../../utils/multiple'
import { useFetchshelvesByIDQuery, usePublishshelveMutation } from '../../features/slices/shelfSlice'
import { toast } from 'react-toastify'

function shelfDetails() {
    const location = useLocation()
    const { details } = location.state
    const [publishshelve] = usePublishshelveMutation();
    const { data, refetch, isFetching } = useFetchshelvesByIDQuery(details._id)

    const publish = async () => {
        try {
            await publishshelve(details._id).unwrap();
            await refetch()
            toast.success(` ${data.published ? "publication done" : "Unpublication done"}`)
        } catch (error) {
            console.log(error)
            toast.error(error)
        }

    }
    const DetailItem = (props) => {
        return (
            <div className='flex gap-x-2 -gap-y-10 h-5  items-center  py-3  text-[14px]'>
                <div className='flex font-bold text-primary-100 w-[100px]'>{props.label}:</div>
                <div className='flex font-normal text-slate-400'>{props.value}</div>
            </div>
        )
    }
    const RateItem = (props) => {
        return (
            <Multiple count={1} row body={
                <div className='flex items-center h-4  text-slate-300  font-bold text-[8px]'>
                    <Ratings small row width={2} count={props?.rate} />.................................<span className=' text-slate-400 font-normal  text-[10px]'>{props.perc}%</span>
                </div>
            } />
        )
    }

    return (
        <AdminLayout>
            <div className='flex items-center w-full justify-between my-2 '>

                <div className='flex items-center gap-x-2 '>
                    <TitleContainer title={details.name} left />
                    <div className={`px-2 leading-4 border rounded-full h-5 ${data?.featured ? "flex" : "hidden"} items-center justify-center text-white bg-primary-100 text-[10px]`} onClick={() => publish()}> {data?.featured ? "Featured" : ""}</div>
                </div>
                <div className='flex items-center gap-x-2 '>
                    <Ratings small row width={6} count={details?.ratings} />
                    <div className={`px-2  ${data?.published ? "border border-secondary-200 bg-secondary-300 text-primary-100" : "border bg-primary-300 text-white  border-primary-200"}  rounded-md text-[14px]`} onClick={() => publish()}> {data?.published ? "Unpublish" : "Publish"}</div>
                </div>

            </div>

            <div className="flex flex-wrap w-full">

                {details.files.map((file, i) => (
                    <div key={i} className='w-1/4 h-[250px]    p-2'>
                        <div className='bg-slate-500 w-full h-full'>
                            <img src={file} alt="" className='w-full rounded-sm h-full object-cover' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex w-full border border-dotted border-primary-700  rounded-md p-2'>
                <div className='w-full flex '>
                    <div className='w-[20%] flex-col flex'>
                        <DetailItem label="Name" value={details.name} />
                        <DetailItem label="Town" value={details.town_id.name} />
                        <DetailItem label="Area" value={details.area_id.name} />
                        <DetailItem label="Building" value={details.building} />
                        <DetailItem label="Price" value={details.price} />
                    </div>
                    <div className='w-[35%] flex-col flex'>
                        <div className='flex flex-col text-[14px] px-2 w-1/2'>
                            <h2 className='capitalize font-bold'>features</h2>
                            <div className='flex flex-wrap gap-1'>
                                {details?.features?.map((type, i) => (
                                    <div key={i} className='flex font-normal px-2 text-slate-400 border rounded-md items-center justify-center h-6'>{type.name}</div>
                                ))}
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className='flex w-full border border-dotted border-primary-700 my-1 rounded-md p-2'>
                <div className='w-full flex '>
                    <div className='w-[50%] flex-col flex'>
                        <div className='flex flex-col text-[14px] px-2 w-1/2'>
                            <h2 className='capitalize font-bold'>Types</h2>
                            <div className='flex flex-wrap gap-1'>
                                {details?.types?.map((type, i) => (
                                    <div key={i} className='flex font-normal px-2 text-slate-400 border rounded-md items-center justify-center h-6'>{type.name}</div>
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className='w-[50%]  border pl-2 pt-2'>
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
            </div>
        </AdminLayout>
    )
}

export default shelfDetails