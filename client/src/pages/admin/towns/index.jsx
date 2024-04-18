import { useState } from 'react'
import Table, { TBody, TH, TableContainer, TableHead, TableTitle } from '../../../containers/layout/admin/table';
import { TownsTableHead } from './../data.json'
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
import Button, { ButtonSM } from '../../../containers/Buttons';
import AdminLayout from '../../../containers/layout/admin/adminLayout';
import { Link } from 'react-router-dom';
import InputContainer from '../../../containers/input';
import { useCreateMutation, useFetchQuery, useDeleteMutation, useUpdateMutation } from '../../../features/slices/townsSlice';

// import { useFetchQ uery, useGetusersQuery, useRegisterMutation } from '../../../features/slices/usersApiSlice';
import Modal from '../../../containers/Modal';
import moment from 'moment'

function Towns() {
    const [showModal, setShowModal] = useState(false);

    // const [searchKey, setsearchKey] = useState("");
    const [item, setitem] = useState({ name: "" });
    // const { userInfo } = useSelector((state) => state.auth)
    const { data, refetch, isFetching } = useFetchQuery()
    const [register] = useCreateMutation();
    const [updateTown] = useUpdateMutation();
    const [deleteTown] = useDeleteMutation();
    const changeInput = (e) => {

        const { name, value } = e.target;
        setitem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const closeModal = () => {
        setitem({})
        setShowModal(false)
    }
    const submit = async () => {
        try {
            if (item._id) {
                await updateTown(item).unwrap();
                refetch()
                closeModal()
                toast('Created Succesfully')
            } else {
             
                await register(item).unwrap();
                refetch()
                closeModal()
                toast('Created Succesfully')
            }

        } catch (error) {
            toast.error(error.data.message)
            console.log(error)
        }
    }
    const deleteHandler = async (id) => {
        try {
            await deleteTown(id).unwrap();
            refetch()
            toast(`${item.lastName} Deleted Succesfully`)
        } catch (error) {
            console.log("first", error)
        }
    }

    return (
        <AdminLayout>

            <TableContainer isFetching={isFetching}>
                <TableTitle tableTitle="Towns " />
                <div className='flex justify-between items-center m-2 '>
                    {/* <SearchContaine value={searchKey} name="name" placeholder="Search "
                    onChange={(e) => debounce(search(e), 1000)}
                    /> */}
                    <div className='flex w-full justify-end  gap-x-3'>

                        <Button
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                            </svg>}
                            primary title="New" onClick={() => { setShowModal(true) }} />
                    </div>
                </div>
                <Table>
                    <TableHead>
                        {TownsTableHead.map((head, i) => (<TH key={i} title={head} />))}
                    </TableHead>
                    <TBody>
                        {data?.map(person => (
                            <tr key={person?._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">

                                        <Link
                                            to={`/admin/shelf-owners/${person?.name?.replace(/\s+/g, '')
                                                }`} state={{ details: person }}

                                        >
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{person?.name}</div>

                                            </div>
                                        </Link>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="text-sm font-medium text-gray-900 "
                                    >
                                        {moment(person.createdAt).format("Do MM YYYY")}
                                    </span>
                                </td>



                                <td className="px-6 py-4 whitespace-nowrap  flex  gap-x-1 text-sm font-medium">
                                    <div className="text-indigo-600 hover:text-indigo-900">
                                        <ButtonSM primary title="Edit" onClick={() => { setitem(person); setShowModal(true); }} height={2} width={8} />
                                    </div>
                                    <div className="text-indigo-600 hover:text-indigo-900">
                                        <ButtonSM danger title="Delete" onClick={() => { deleteHandler(person?._id); }} height={2} width={8} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </TBody>
                </Table>
            </TableContainer>

            <Modal
                showModal={showModal}
                closeModal={closeModal}
                item={item}
                handleSubmit={submit}
                width="w-1/2"
                buttontitle={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Update` : "Save"}
                title={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Edit ${item.name}` : "Add Town  "}
                body={
                    <form className="  rounded px-8 pt-6 pb-8 w-full">
                        <div className='flex w-full  space-between'>
                            <div className='w-full px-2'>
                                <InputContainer value={item?.name} required name="name" label="Name" placeholder="Name" handleChange={(e) => changeInput(e)} />
                            </div>

                        </div>



                    </form>
                }
            />
        </AdminLayout>
    )
}

export default Towns