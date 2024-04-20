/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { toast } from "react-toastify";

function RateModal({ id, show, setshow }) {

    const [item, setItem] = useState({
        perpetuator: id,
        claim: ''
    })
    const closeModal = () => {
        setItem({
            perpetuator: id,
            claim: ''
        })
        setshow(false)
    }
    const submit = async () => {
        try {
            // await register(item).unwrap()
            // closeModal()
            toast.success("Thank yous &#128541;")

        } catch (error) {
            toast.error(error.data.message)


        }
    }
    return (
        <>
            {show &&
                <div className="fixed sm:w-[300px]  sm:pb-0 pb-2 w-full sm:h-[200px] h-auto sm:left-[35%] left-0 top-[5%] flex flex-col -z-1  bg-primary-100 opacity-90 sm:rounded-md">
                    <div className='flex flex-col h-full  w-full text-center px-2 rounded-t-md  justify-center items-center'>
                        <span className='text-white'> {"How do you like me ? "}</span>
                        <div className=" flex w-full h-[200px] border-slate-700 border my-1">
                            <div className="w-1/5 items-center  group justify-center">
                                <div className="hidden group-hover:flex">&#128534;</div>
                                <div className="group-hover:hidden flex "> &#128545;</div>

                            </div>
                            <div className="w-1/5 items-center  group justify-center">
                                <div className="flex group-hover:hidden">&#128548;</div>
                                <div className="group-hover:flex hidden "> &#128530;</div>

                            </div>
                            <div className="w-1/5 items-center  group justify-center">
                                <div className="flex group-hover:hidden">&#128553;</div>
                                <div className="group-hover:flex hidden "> &#128558;</div>

                            </div>
                            <div className="w-1/5 items-center  group justify-center">
                                <div className="flex group-hover:hidden">&#128562;</div>
                                <div className="group-hover:flex hidden "> &#128563;</div>

                            </div>
                            <div className="w-1/5 items-center  group justify-center">
                                <div className="flex group-hover:hidden">&#129392;</div>
                                <div className="group-hover:flex hidden "> &#128525;</div>

                            </div>
                        </div>
                        <textarea onChange={(e) => setItem(prev => ({
                            ...prev, claim: e.target.value
                        }))} className="focus:outline-none bg-red-00 w-full h-[500px] placeholder-text-blue-100  border text-[18px] px-2 border" placeholder="Share your thoughts " />
                        <div className='flex items-center justify-between w-full px-2     sm:my-1'>
                            <div className='flex items-center justify-center px-2 shadow-2xl bg-secondary-300  group-hover:bg-primary-300  text-slate-100 rounded-md font-bold  sm:my-1' onClick={() => closeModal()}>Cancel</div>
                            <div className='flex items-center justify-center px-2 shadow-2xl bg-secondary-100  group-hover:bg-primary-300  text-primary-100 rounded-md font-bold  sm:my-1' onClick={submit}>Rate Us</div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default RateModal