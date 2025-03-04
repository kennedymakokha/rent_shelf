import { useEffect } from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../App.jsx'
import { initialState } from '../shelves/index.jsx'
import ErrorModal from '../../containers/errorModal.jsx'


function Index() {

    const { data, refetch, isFetching, isSuccess, isError } = useFetchshelvesQuery(initialState)
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {

        if (userInfo && userInfo.role === "admin") {
            navigate('admin')
        } else {
            return
        }
    })
    useEffect(() => {

        socket.on("publishing", async () => {
            await refetch()
        });

    }, [data,])

    return (
        <div className='overflow-hidden'>
            <Slider data={data} />

            <div className=" w-full h-full relative z-0">
                <Featured data={data?.filter(e => e.featured === true)} isFetching={isFetching} isSuccess={isSuccess} />
                <Shelves data={data} isFetching={isFetching} isSuccess={isSuccess} />
                <Warehouse data={data?.filter(e => e.warehouse === true)} isFetching={isFetching} isSuccess={isSuccess} />
                <ErrorModal show={isError} />
            </div>

        </div>
    )
}

export default Index