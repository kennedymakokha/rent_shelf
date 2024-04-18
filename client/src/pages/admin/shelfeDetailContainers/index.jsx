
import AdminLayout from '../../containers/layout/admin/adminLayout'
import { useLocation } from 'react-router-dom'
import TitleContainer from '../../containers/titleContainer'
import { Ratings } from '../../utils/multiple'
import { useFetchshelvesByIDQuery, usePublishshelveMutation } from '../../features/slices/shelfSlice'
import { toast } from 'react-toastify'
import { socket } from '../../App'
import { DetailItem, RateItem } from './shelfeDetailContainers/items'

function ShelfDetails() {
    const location = useLocation()
    const { details } = location.state
    const [publishshelve] = usePublishshelveMutation();
    const { data, refetch } = useFetchshelvesByIDQuery(details._id)

    const publish = async () => {
        try {
            await publishshelve(details._id).unwrap();
            socket.emit('publishing', details._id);
            await refetch()
            toast.success(` ${data.published ? "publication done" : "Unpublication done"}`)
        } catch (error) {
            console.log(error)
            toast.error(error)
        }

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
                    <div className={`px-2  ${data?.published ? "border border-secondary-200 bg-secondary-300 text-primary-100" : "border bg-primary-300 text-white  border-primary-200"}  rounded-md text-[18px]`} onClick={() => publish()}> {!data?.published ? "Unpublish" : "Publish"}</div>
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
                        <div className='flex flex-col text-[18px] px-2 w-1/2'>
                            <h2 className='capitalize font-bold'>features</h2>
                            <div className='flex flex-wrap gap-1'>
                                {details?.features?.map((type, i) => (
                                    <div key={i} className='flex font-normal px-2 text-primary-100 border rounded-md items-center justify-center h-6'>{type.name}</div>
                                ))}
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className='flex w-full border border-dotted border-primary-700 my-1 rounded-md p-2'>
                <div className='w-full flex '>
                    <div className='w-[50%] flex-col flex'>
                        <div className='flex flex-col text-[18px] px-2 w-1/2'>
                            <h2 className='capitalize font-bold'>Types</h2>
                            <div className='flex flex-wrap gap-1'>
                                {details?.types?.map((type, i) => (
                                    <div key={i} className='flex font-normal px-2 text-primary-100 border rounded-md items-center justify-center h-6'>{type.name}</div>
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className='w-[50%]  border pl-2 pt-2'>
                        <h2 className='capitalize text-[18px] font-bold'>Ratings</h2>
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

export default ShelfDetails