/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Contents from './home/contents'
import Frame from './../assets/mzungu.jpg'
import InputContainer from '../containers/input'
import { IconsData } from './about/components/Icons'
import { SVG, TikTok } from './about/components/components'

import { useEditUserDetailsMutation, useGetuserQuery } from '../features/slices/usersApiSlice'
import { HandleConsole } from '../utils/selectFromapi'
import { getIP, getMe } from '../utils/handleLocation'

function Profile() {
    // useGetusersQuery
    const [showModal, setShowModal] = useState(false)
    const { data, refetch } = useGetuserQuery()
    const [location, setLocations] = useState()
    const [ipAddress, setIPAddress] = useState('')
    const [updateRow] = useEditUserDetailsMutation()

    const [item, setItem] = useState({
        x: "", fb: "", insta: "", youtube: "", name: "", email: "", phone: "", tiktok: ''
    })

    const changeInput = (e) => {
        const { name, value } = e.target ? e.target : e
        setItem(prevState => ({
            ...prevState, [name]: value
        }))

    }
    const openModal = async () => {
        setItem(data)
        setShowModal(true)

    }
    const submit = async () => {
        getMe(setLocations)
        getIP(setIPAddress)
        item.location = location
        item.ip = ipAddress
        await updateRow(item).unwrap()
        refetch()
        setShowModal(false)

    }
    return (
        <Contents>


            <div className='w-full h-[50vh]  flex'>
                <div className='w-[20%] sm:flex hidden  h-[300px] relative z-0  shadow-lg h-full flex items-center justify-center bg-secondary-200 p-4'>
                    <img src={Frame} className='w-full shadow-lg rounded-sm  h-full object-cover' alt="" />

                    <div className='absolute bg-black shadow-lg inset-0 z-2 opacity-50'>
                    </div>
                </div>
                <div className='flex sm:w-[90%] w-full   h-full  p-2 flex-col  '>
                    <div className='flex sm:flex-row flex-col h-[90%]  '>
                        <div className=' w-1/2  flex flex-col'>
                            <div className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                <div className='w-[20%]  font-bold '>Name:</div>
                                <div className='w-[80%] font-normal '>{data?.name}</div>
                            </div>
                            <div className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                <div className='w-[20%]  font-bold '>Phone:</div>
                                <div className='w-[80%] font-normal '>{data?.phone}</div>
                            </div>
                            <div className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                <div className='w-[20%]  font-bold '>email:</div>
                                <div className='w-[80%] font-normal '>{data?.email}</div>
                            </div>
                            <div className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                <div className='w-[20%]  font-bold '>Referal:</div>
                                <div className='w-[80%] font-normal '>{data?.referal_no}</div>
                            </div>
                            <div className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                <div className='w-[20%]  font-bold '>role:</div>
                                <div className='w-[80%] font-normal '>{data?.referal_no}</div>
                            </div>
                        </div>
                        <div className=' w-1/2   justify-center flex flex-col'>
                            {IconsData.map((icon, i) => (
                                <div key={i} className='w-full flex p-2 text-slate-400 text-[18px]  '>
                                    <div className='w-[20%]  flex items-center justify-center font-bold '> {icon.name === "tiktok" ? <TikTok customcolor={icon.text} /> : <SVG mr customcolor={icon.text} path={icon.path} />}</div>
                                    <div className={`w-[80%] font-normal  `}>{data !== undefined && data[icon.name]}</div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div onClick={openModal} className='flex item-center justify-end '>
                        <div className='w-[100px] px-2  justify-center flex rounded-md shadow-lg bg-slate-50 text-secondary-100'>Update</div>
                    </div>
                </div>

            </div>
            <Modal submit={submit} showModal={showModal} changeInput={changeInput} item={item} setShowModal={setShowModal} />
        </Contents>
    )
}

export default Profile
const Modal = ({ showModal, setShowModal, submit, changeInput, item }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen  ">
                            <div className="relative w-auto  p-10 mx-auto bg-white rounded-md shadow-lg">
                                <div className=" sm:flex  w-full">

                                    <div className=" flex flex-col  w-[900px] ">

                                        <div className='w-full gap-x-2  flex '>
                                            <div className='w-[25%] sm:flex hidden '>
                                                <div className='w-[200px]  relative z-0  shadow-lg h-[200px] flex group items-center justify-center bg-secondary-100 p-2'>
                                                    <img src={Frame} className='w-full h-full shadow-lg rounded-md  h-full object-cover' alt="" />
                                                    <div className='absolute bg-black shadow-lg inset-0 z-2 opacity-50'></div>
                                                    <div className='absolute bg-white px-2 text-sm rounded-md shadow-lg right-3 group-hover:flex hidden bottom-3 z-10 cursor-pointer '>Update</div>
                                                    {/* <div className='absolute bg-black shadow-lg bottom-5 right-5 w-10 h-10 rounded-full  bg-white z-10 '></div> */}
                                                </div>
                                            </div>

                                            <div className='w-[40%] flex flex-col '>
                                                <InputContainer noLabels
                                                    name="name"
                                                    handleChange={changeInput}
                                                    placeholder=" name"
                                                    label=" Name"
                                                    type="text"
                                                    value={item?.name}
                                                    id="name"
                                                    required={true}
                                                />
                                                <InputContainer noLabels
                                                    name="email"
                                                    handleChange={changeInput}
                                                    placeholder="example@gmail.com"
                                                    label=""
                                                    type="email"
                                                    value={item?.email}
                                                    id="name"
                                                    required={true}
                                                />
                                                <InputContainer noLabels
                                                    name="phone"
                                                    handleChange={changeInput}
                                                    placeholder="0712121212"
                                                    label=" "
                                                    type="Number"
                                                    value={item?.phone}
                                                    id="name"
                                                    required={true}
                                                />
                                            </div>


                                            <div className='w-[35%] flex flex-col '>

                                                {IconsData.map((icon, i) => (
                                                    <InputContainer key={i} noLabels
                                                        name={icon.name}
                                                        icon={icon.path}
                                                        bg={icon.color}
                                                        handleChange={changeInput}
                                                        placeholder={icon.title}
                                                        type="text"
                                                        // value={item[`${icon.name}`]}
                                                        // value={() => getValueByKey(item, "Twitter")}
                                                        id="name"
                                                        required={true}
                                                    />
                                                ))}


                                            </div>
                                        </div>


                                        <div className="items-center w-full  gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-[100px] mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="w-[10px] mt-2 p-2.5 flex-1 text-white bg-primary-200 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={submit}

                                            >
                                                Update
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </>
    )
}