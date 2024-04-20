/* eslint-disable react/prop-types */
import { useState } from "react"
import { useCreateAbuseMutation } from "../../../../../features/slices/abuseSlice";
import { toast } from "react-toastify";

function ClaimModal({ id, show, setshow }) {
    const [register] = useCreateAbuseMutation();

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
            await register(item).unwrap()
            closeModal()
            toast.success("Claim submitted")

        } catch (error) {
            toast.error(error.data.message)


        }
    }
    return (
        <>
            {show &&
                <div className="fixed sm:w-[300px] group sm:pb-0 pb-2 w-full sm:h-[200px] h-auto sm:right-[5%] right-0 bottom-[20%] flex flex-col -z-1  bg-red-200 opacity-90 sm:rounded-md">
                    <div className='flex flex-col h-full  w-full text-center px-2 rounded-t-md  justify-center items-center'>
                        <span className='group-hover:text-primary-100 text-slate-900'> {"It is Unfortunate that this happened  Kindly tell us about it "}</span>
                        <textarea onChange={(e) => setItem(prev => ({
                            ...prev, claim: e.target.value
                        }))} className="focus:outline-none bg-red-00 w-full h-[500px] placeholder-text-blue-100  border px-2 border" placeholder="Enter the abuse" />
                        <div className='flex items-center justify-between w-full px-2     sm:my-1'>
                            <div className='flex items-center justify-center px-2 shadow-2xl bg-secondary-100    text-white rounded-md font-bold  sm:my-1' onClick={closeModal}>Cancel</div>
                            <div className='flex items-center justify-center px-2 shadow-2xl bg-red-900  group-hover:bg-primary-300  text-white rounded-md font-bold  sm:my-1' onClick={submit}>Report</div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default ClaimModal