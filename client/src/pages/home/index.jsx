import  { useEffect } from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { useFetchshelvesQuery } from '../../features/slices/shelfSlice.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../App.jsx'
import { initialState } from '../shelves/index.jsx'

function Index() {

    const { data, refetch, isFetching } = useFetchshelvesQuery(initialState)
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
        refetch()
        socket.on("publishing", () => {

            refetch()
            // console.log(data); // x8WIv7-mJelg7on_ALbx
        });

    }, [data, refetch])

    return (
        <div className='overflow-hidden'>
            <Slider />

            <Featured data={data?.filter(e => e.featured === true)} isFetching={isFetching} />
            <Shelves data={data} isFetching={isFetching} />
            <Warehouse data={data?.filter(e => e.warehouse === true)} isFetching={isFetching} />



        </div>
    )
}

export default Index