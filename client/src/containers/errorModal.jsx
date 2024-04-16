/* eslint-disable react/prop-types */

import disconnect from './../assets/logo.png'
function ErrorModal({ image, msg, show }) {
    return (
        <>
            {show &&
                <div className="fixed sm:w-[300px] group sm:pb-0 pb-2 w-full sm:h-[400px] h-auto sm:right-3 right-0 bottom-0 flex flex-col -z-1  bg-red-200 opacity-90 sm:rounded-md">
                    <img src={image ? image : disconnect} alt='' className='sm:flex hidden h-1/2 w-full  sm:rounded-t-md  justify-center items-center' />

                    <div className='flex flex-col h-1/2 group-hover:bg-secondary-100 w-full text-center px-2 rounded-t-md  justify-center items-center'>
                        <span className='group-hover:text-primary-100 text-slate-900'> {msg ? msg : "Error connecting to the server kindly try again later"}</span>
                        <div className='flex items-center justify-center px-2 shadow-2xl bg-primary-100  group-hover:bg-slate-300 group-hover:text-primary-100 text-white rounded-md font-bold  sm:mt-10'>Refresh</div>
                    </div>
                </div>}
        </>
    )
}

export default ErrorModal