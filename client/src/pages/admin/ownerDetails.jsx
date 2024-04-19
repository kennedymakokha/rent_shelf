
import { Link, useLocation } from 'react-router-dom'
import AdminLayout from '../../containers/layout/admin/adminLayout'
import { MetaDatacontainer } from './detailsContainers/metaData'
import Table, { TBody, TH, TableContainer, TableHead, TableTitle, Tdata } from '../../containers/layout/admin/table'
import { ShelvesTableHead } from './data.json'
import { useFetchUsershelvesQuery } from '../../features/slices/shelfSlice'
import { useState } from 'react'

function OwnerDetails() {
    // useFetchUsershelvesQuery

    const location = useLocation()
    const { details } = location.state
    const [loading] = useState(false)
    // const [publishshelve,] = usePublishshelveMutation();

    const { data, isFetching } = useFetchUsershelvesQuery(details._id)
   
    return (
        <AdminLayout>
            <div className=' flex w-full h-[200px] '>
                <div className='w-1/4 h-[200px] flex items-center justify-center '>
                    <div className='w-[200px] h-[200px]  rounded-full '>
                        <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" className='w-[200px] h-[200px] rounded-lg ' alt="" />
                    </div>
                </div>

                <div className='w-3/4 h-full flex-col  flex bg-slate-100 inner-shadow shadow-xl rounded-md'>
                    <div className='flex p-2 h-full gap-y-2 flex-col'>
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
                                <Tdata title={shelf?.area?.split('+').join(' ')} />
                                <Tdata title={shelf?.building} />
                                <Tdata title={shelf?.building} array={shelf.features} />
                                <Tdata array={shelf.types} />
                                {/* <div onClick={() => publish(shelf._id)} className={` hover:bg-green-200 cursor-pointer border ${shelf.published ? "border-green-200 bg-green-100" : "border-red-200  text-primary-100 bg-red-100"} text-[10px] flex items-center justify-center px-2 rounded-full `}> {loading ? "Loading" : "Published"}</div> */}
                                <Tdata loading={loading} id={shelf._id} title={shelf?.published ? "Published" : "Not Published"} badge boolean={shelf.published} />
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

export default OwnerDetails