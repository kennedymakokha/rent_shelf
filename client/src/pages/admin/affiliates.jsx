import React, { useState } from 'react'
import Table, { TBody, TH, TableContainer, TableHead, TableTitle } from '../../containers/layout/admin/table';
import { AffiliatesTableHead } from './data.json'
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import Button, { ButtonSM } from '../../containers/Buttons';
import AdminLayout from '../../containers/layout/admin/adminLayout';
import { Link } from 'react-router-dom';
import InputContainer, { SearchContaine } from '../../containers/input';
import { useGetusersQuery, useRegisterMutation } from '../../features/slices/usersApiSlice';
import Modal from '../../containers/Modal';

function Affiliates() {


    const [showModal, setShowModal] = useState(false);
    const [searchKey, setsearchKey] = useState("");
    const [item, setitem] = useState({ firstName: "", lastName: "", ID_no: "", phone: '', email: "" });
    const { userInfo } = useSelector((state) => state.auth)
    const { data, refetch, isFetching } = useGetusersQuery( "affiliate" )
    const [register] = useRegisterMutation();
    // const [updatePatient] = useUpdatePatientMutation();
    // const [deletePatient] = useDeletePatientMutation();
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
                // await updatePatient(item).unwrap();
                // refetch()
                closeModal()
                toast('Created Succesfully')
            } else {
                item.name = `${item.firstName} ${item.lastName}`
                item.password = item.ID_no
                item.role = "affiliate"

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
    const search = async (e) => {
        setsearchKey(e.target.value)
        refetch()
        // debounce(() => refetch(), 5000);


    }
    const deleteHandler = async (id) => {
        try {
            await deletePatient(id).unwrap();
            refetch()
            toast(`${item.lastName} Deleted Succesfully`)
        } catch (error) {
            console.log("first", error)
        }
    }

    return (
        <AdminLayout>
            <TableContainer isFetching={isFetching}>
                <TableTitle tableTitle="Affiliates " />
                <div className='flex justify-between items-center m-2 '>
                    <SearchContaine value={searchKey} name="name" placeholder="Search "
                    // onChange={(e) => debounce(search(e), 1000)}
                    />

                    <Button
                        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                        </svg>}
                        primary title="New" onClick={() => { setShowModal(true) }} />
                </div>
                <Table>
                    <TableHead>
                        {AffiliatesTableHead.map((head, i) => (<TH key={i} title={head} />))}
                    </TableHead>
                    <TBody>
                        {data?.map(person => (
                            <tr key={person?._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">

                                        <Link
                                            to={`/patients/${person?.name?.replace(/\s+/g, '')
                                                }`} state={{ details: person }}

                                        >
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{person?.name}</div>

                                            </div>
                                        </Link>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{person?.ID_no}</div>

                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className="px-2 inline-flex text-sm leading-5
      font-semibold rounded-full "
                                    >
                                        {person?.phone}
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
                buttontitle={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Update` : "Save"}
                title={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Edit ${item.firstName} ${item.lastName}` : "Add an Affiliate "}
                body={
                    <form className="  rounded px-8 pt-6 pb-8 w-full">
                        <div className='flex w-full  space-between'>
                            <div className='w-1/2 px-2'>
                                <InputContainer value={item?.firstName} required name="firstName" label="First Name" placeholder="First Name" handleChange={(e) => changeInput(e)} />
                            </div>
                            <div className='w-1/2 px-2'>
                                <InputContainer required value={item?.lastName} name="lastName" label="Last Name" placeholder="Last Name" handleChange={(e) => changeInput(e)} />
                            </div>
                        </div>

                        <div className='flex w-full  space-between'>
                            <div className='w-1/2 px-2'>
                                <InputContainer name="phone" value={item?.phone} type="Number" required label="phone" placeholder="phone" handleChange={(e) => changeInput(e)} />
                            </div>
                            <div className='w-1/2 px-2'>
                                <InputContainer value={item?.email} name="email" type="email" label="email" placeholder="email" handleChange={(e) => changeInput(e)} />
                            </div>
                        </div>


                        <div className='flex w-full  space-between'>
                            <div className='w-1/2 px-2'>
                                <InputContainer name="ID_no" value={item?._ID_no} type="Number" required label="Identification Number" handleChange={(e) => changeInput(e)} />
                            </div>

                        </div>

                    </form>
                }
            />
        </AdminLayout>
    )
}

export default Affiliates