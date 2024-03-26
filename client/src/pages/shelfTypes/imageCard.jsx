
import { useState } from "react";

export default function ImageCard({ showModal, setShowModal, images }) {
    const [count, setCount] = useState(0)
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full z-12 h-full bg-black opacity-80"
                            onClick={() => alert('false')}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg  mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <img src={images && images[count]} alt="" className="h-full w-full" />
                                </div>
                                <div className="absolute top-4 right-4 flex justify-center  bg-slate-100 hover:bg-primary-300 w-5 h-5 rounded-full  items-center z-10" onClick={() =>setShowModal(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </div>
                                <div className="absolute top-[25%] bottom-[25%] w-full flex justify-between px-2 items-center z-10" >
                                    <div
                                        onClick={() => setCount(count - 1)} className={`h-10 w-10 rounded-full hover:bg-white ${count === 0 ? "text-primary-500" : "bg-slate-400 "} flex items-center justify-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-primary-100 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                                        </svg></div>
                                    <div
                                        onClick={() => setCount(count + 1)} className={`h-10 w-10  rounded-full hover:bg-white ${count === images?.length - 1 ? "" : "bg-slate-400"} flex items-center justify-center`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-primary-100 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                                        </svg>
                                    </div>


                                </div>
                            </div>
                            {/* <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg z-20">
                                <div className="float-right" onClick={() =>
                                    setShowModal(false)
                                }>x</div>
                               
                            </div> */}
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
