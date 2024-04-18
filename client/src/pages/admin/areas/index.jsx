import { useEffect, useState } from 'react'
import Table, { TBody, TH, TableContainer, TableHead, TableTitle } from '../../../containers/layout/admin/table';
import { AreaTableHead } from './../data.json'
import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
import Button, { ButtonSM } from '../../../containers/Buttons';
import AdminLayout from '../../../containers/layout/admin/adminLayout';
import { Link } from 'react-router-dom';
import InputContainer, { CheckBoxContainer, SelectContainer } from '../../../containers/input';
import { useFetchQuery } from '../../../features/slices/townsSlice';
import { SelectFromAPI } from "../../../utils/selectFromapi";
import { useDeleteAreaMutation, useFetchAreasQuery, useUpdateAreaMutation, useCreateAreaMutation } from '../../../features/slices/areaSlice';
import Modal from '../../../containers/Modal';
import moment from 'moment'

import MapInput from '../../../containers/maps/smallMap';


function Areas() {
    const [showModal, setShowModal] = useState(false);

    // const [searchKey, setsearchKey] = useState("");
    const [item, setItem] = useState({ name: "", town_id: "", location: { lat: "", lng: "" } });
    // const { userInfo } = useSelector((state) => state.auth)
    const { data: towns, } = useFetchQuery()
    const { data, refetch, isFetching } = useFetchAreasQuery()
    const [register] = useCreateAreaMutation();
    const [updateTown] = useUpdateAreaMutation();
    const [deleteTown] = useDeleteAreaMutation();
    const [currentLocation, setCurrentLocation] = useState(true);
    const [actualname, setActualname] = useState("");
    const changeInput = (e) => {

        const { name, value } = e.target;
        setItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const closeModal = () => {
        setItem({})
        setShowModal(false)
        setActualname("")
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
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            position => {
                setItem((prevState) => ({
                    ...prevState,
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                }));
            },
            error => console.error('Error getting location:', error)
        );
    }, []);

    const setLocation = (position) => {
        setItem((prevState) => ({
            ...prevState,
            location: position,
        }));
        setCurrentLocation(true)

    }
    return (
        <AdminLayout>

            <TableContainer isFetching={isFetching}>
                <TableTitle tableTitle="Areas " />
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
                        {AreaTableHead.map((head, i) => (<TH key={i} title={head} />))}
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
                                        {person.town_id.name}
                                    </span>
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
                                        <ButtonSM primary title="Edit" onClick={() => { setItem(person); setShowModal(true); }} height={2} width={8} />
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
                fullwidth={!currentLocation}

                width="w-1/2"
                buttontitle={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Update` : "Save"}
                title={item?._id !== undefined && item?._id !== null && item?._id !== "" ? `Edit ${item.name}` : ` ${currentLocation ? "Add Area" : "Select Actual location"}`}
                body={<>
                    {!currentLocation ? <MapInput setActualname={setActualname} onChange={setLocation} placeholder="Search the area" /> :
                        <form className="  rounded px-8 pt-6 pb-8 w-full">
                            <div className='flex w-full  space-between'>
                                <div className='w-full px-2'>

                                    <InputContainer value={item?.name} required name="name" label="Name" placeholder="Name" handleChange={(e) => changeInput(e)} />
                                </div>
                                <div className='w-full px-2'>
                                    <SelectContainer
                                        name="Town"
                                        array={SelectFromAPI({
                                            array: towns
                                            , name: "town_id"
                                        })}
                                        handleChange={async (e) => { setItem(prevState => ({ ...prevState, town_id: e.target.value })); }}
                                        placeholder="town"
                                        label="town"
                                        type="select"
                                        value={item.town_id}
                                        id="town"
                                        required={true}
                                    />

                                </div>


                            </div>
                            <div className='w-full px-2'>
                                {actualname === "" ? <div className='flex flex-col'>
                                    <CheckBoxContainer title="Use my current location" checked={currentLocation} onClick={() => setCurrentLocation(prevState => (!prevState))} />
                                    <CheckBoxContainer title="Enter Actual Location" checked={!currentLocation} onClick={() => setCurrentLocation(prevState => (!prevState))} />
                                </div> :
                                    <InputContainer cancel btnaction={() => { setActualname(""); setCurrentLocation((prevState) => (!prevState)) }} value={actualname} required name="Location" label="Location" placeholder="Name" handleChange={(e) => changeInput(e)} />}


                            </div>


                        </form>}
                </>
                }
            />
        </AdminLayout>
    )
}

export default Areas