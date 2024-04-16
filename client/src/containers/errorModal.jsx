/* eslint-disable react/prop-types */

import disconnect from './../assets/logo.png'
function ErrorModal({ image, msg, show }) {
    return (
        <>
            {show &&
                <div className="fixed w-[300px] h-[400px] right-3 bottom-0 flex flex-col -z-1 bg-red-200 opacity-80 rounded-md">
                    <img src={image ? image : disconnect} alt='' className='flex h-1/2 w-full  rounded-t-md  justify-center items-center' />

                    <div className='flex flex-col h-1/2 w-full text-center px-2 rounded-t-md  justify-center items-center'>
                        <span> {msg ? msg : "Error connecting to the server kindly try again later"}</span>
                        <div className='flex items-center justify-center px-2 shadow-2xl bg-primary-100 rounded-md font-bold  mt-10'>Refresh</div>
                    </div>
                </div>}
        </>
    )
}

export default ErrorModal