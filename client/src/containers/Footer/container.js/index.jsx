/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const Title = ({ title }) => {
    return (
        <h2 className='flex sm:text-[18px] text-[14px] font-semibold text-secondary-100 underline  sm:text-center justify-center  sm:items-center items-start '>{title}</h2>
    )
}
export const AddressContainer = ({ icon, title, url }) => {
    return (
        <div className={`flex  group  gap-x-2`}>
            {icon && <div className=' flex w-6 h-6 border group-hover:border-slate-400 border-secondary-100 justify-center items-center'>
                {icon}
            </div>}
            <Link to={url} className={`  ${url ? "text-blue-100 group-hover:underline" : "text-slate-400"}  group-hover:text-secondary-400 sm:text-[18px] text-[14px]`}> {title}</Link>
        </div>
    )
}

export const FooterItemContainer = ({ body, title, }) => {
    return (
        <div className="sm:w-1/4 w-full  mt-2 sm:border-r  sm:p-2 border-dotted border-secondary-100  h-full flex flex-col ">
            <Title title={title} />
            {body}

        </div>
    )
}
export const SubScribeContainer = () => {
    return (
        <div className=' flex px-2 py-2  items-center border sm:border-slate-100 border-primary-100  w-full h-full flex-col '>
            <h2 className='font-bold sm:text-2xl text-xl text-secondary-100'>SUBSCRIBE TO MAIL!</h2>
            <p className='sm:text-[18px] text-[14px] text-center sm:text-slate-100 text-primary-100'>Get our Daily email n.ewsletter with Special Services, Updates, Offers and more</p>
            <div className='flex sm:mt-10 mt-2  border border-primary-200 bottom-0 static w-full h-10'>
                <input type="text" placeholder='Email' className='focus:outline-none  px-2 h-full w-[60%]' />
                <div className='flex w-[40%]  px-2 sm:text-[18px] text-[14px] shadow-2xl items-center justify-center text-secondary-100 sm:text-white bg-primary-100 '>SUBSCRIBE </div>
            </div>
        </div>
    )
}