
import AdminLayout from '../../containers/layout/admin/adminLayout'
import { useLocation } from 'react-router-dom'
import TitleContainer from '../../containers/titleContainer'
import { Ratings } from '../../utils/multiple'
import { useFetchshelvesByIDQuery, usePublishshelveMutation } from '../../features/slices/shelfSlice'
import { toast } from 'react-toastify'
import { socket } from '../../App'
import ImageWrap from './shelfeDetailContainers/imageWrap.jsx'
import Details from './shelfeDetailContainers/details.jsx'

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
                    <div className={`px-2  ${data?.published ? "border border-secondary-200 bg-secondary-300 text-primary-100" : "border bg-primary-300 text-white  border-primary-200"}  rounded-md text-[18px]`} onClick={() => publish()}> {data?.published ? "Unpublish" : "Publish"}</div>
                </div>

            </div>

            <ImageWrap details={details} />
            <Details details={details} />

        </AdminLayout>
    )
}

export default ShelfDetails