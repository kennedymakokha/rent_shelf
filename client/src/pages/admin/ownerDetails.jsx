
import { Link, useLocation } from 'react-router-dom'
import { HandleConsole } from '../../utils/selectFromapi'
import { ScrollImagesRight } from '../home/featured/scrollRight'
import Image from './../../assets/logo.png'
import { ImageContainer } from '../shelfTypes/serviceCard'
import AdminLayout from '../../containers/layout/admin/adminLayout'
import { MetaDatacontainer } from './detailsContainers/metaData'
import Loader from '../../containers/layout/admin/Loader'
import Table, { TBody, TH, TableContainer, TableHead, TableTitle, Tdata } from '../../containers/layout/admin/table'
import { SearchContaine } from '../../containers/input'
import { ShelvesTableHead } from './data.json'
import { useFetchUsershelvesQuery } from '../../features/slices/shelfSlice'

function ownerDetails() {
    // useFetchUsershelvesQuery

    const location = useLocation()
    const { details } = location.state
    const { data, refetch, isFetching } = useFetchUsershelvesQuery(details._id)

    return (
        <AdminLayout>
            <div className=' flex w-full h-[200px] '>
                <div className='w-1/4 h-[200px] flex items-center justify-center '>
                    <div className='w-[200px] h-[200px]  rounded-full '>
                        <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" className='w-[200px] h-[200px] rounded-lg ' alt="" />
                    </div>
                </div>

                <div className='w-3/4 h-[200px] pr-0 flex items-between justify-between bg-slate-100 inner-shadow shadow-xl rounded-md'>
                    <div>
                        <MetaDatacontainer title="Name" value={`${details?.name}`} />
                        <MetaDatacontainer title="Phone" value={details?.phone} />
                        <MetaDatacontainer title="Email" value={details?.email} />
                        <MetaDatacontainer title="ID_NO" value={details?.ID_no} />
                    </div>

                </div>

            </div>
            <TableContainer isFetching={isFetching}>
                <TableTitle tableTitle="Shelves " />
                <div className='flex justify-between items-center m-2 '>
                    {/* <SearchContaine value={searchKey} name="name" placeholder="Search "
                    // onChange={(e) => debounce(search(e), 1000)}
                    /> */}

                </div>
                <Table>
                    <TableHead>
                        {ShelvesTableHead.map((head, i) => (<TH key={i} title={head} />))}
                    </TableHead>
                    <TBody>
                        {data?.map(shelf => (
                            <tr key={shelf?._id}>
                                <td className="px-6 py-1 font-normal whitespace-nowrap">
                                    <div className="flex items-center">

                                        <Link
                                            to={`/admin/shelves/${shelf?.name?.replace(/\s+/g, '')
                                                }`} state={{ details: shelf }}

                                        >
                                            <div className="text-sm  text-gray-500">{shelf?.name}</div>
                                        </Link>
                                    </div>
                                </td>
                                <Tdata title={shelf?.price} />
                                <Tdata title={shelf?.town_id?.name} />
                                <Tdata title={shelf?.area_id?.name} />
                                <Tdata title={shelf?.building} />
                                <Tdata title={shelf?.building} array={shelf.features} />
                                <Tdata  array={shelf.types} />
                                <Tdata title={shelf?.published ? "Published" : "Not Published"} badge boolean={shelf.published} />
                                <Tdata title={shelf?.featured ? "Featured" : "Not Featured"} badge boolean={shelf.features} />

                            </tr>
                        ))}
                    </TBody>
                </Table>
            </TableContainer>
            {/* <div className="absolute  top-0  h-16 w-[100px] left-10   flex justify-between items-center z-10">
                {[1, 2, 3, 4, 5].map((y, i) => (
                    <div className={`absolute  top-[100%]  right-[${i * 6}%]  h-10 w-10 border bg-primary-100 border-black rounded-full  flex justify-center items-center z-24`}>
                        <img src={Image} alt="" className="h-full w-full rounded-full object-cover" />
                    </div>
                ))}

            </div> */}
        </AdminLayout >
    )
}

export default ownerDetails