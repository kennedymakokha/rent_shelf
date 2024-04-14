/* eslint-disable react/prop-types */

import  { useEffect } from "react";



const Modal = (props) => {
    const { closeModal, title,handleSubmit } = props
    const { showModal, item } = props

    useEffect(() => {
        // console.log("props.item")
    }, [])
    return (
        <>

            {showModal ? (
                <>
                    <div className="flex  overflow-x-hidden  fixed top-[12%] sm:left-[10%] sm:right-[10%] z-50 outline-none focus:outline-none">
                        <div className="relative  w-full my-2 mx-auto ">
                            <div className="border-0 rounded-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between px-5 py-2 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-2xl font=semibold">{title} </h3>
                                    <div onClick={() => closeModal(false)} className="h-8 w-8 p-1  border flex items-center justify-center rounded-full text-center text-2xl font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="hover:text-secondary-500 text-primary-100 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="relative px-6 bg-secondary-900 flex-auto">
                                    <div className=" rounded px-8 pt-6 pb-1 w-full">
                                        {props.body}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-secondary-500 hover:text-primary-100 hover:border-secondary-100 border-primary-100 border rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => closeModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-primary-100 hover:bg-primary-300 hover:text-secondary-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => { handleSubmit(item) }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </>
    );
};

export default Modal;

