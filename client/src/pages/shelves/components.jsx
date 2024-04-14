/* eslint-disable react/prop-types */

import { Multiple } from "../../utils/multiple"

// eslint-disable-next-line react/prop-types
export const FilterTitle = ({ title }) => {
    return (
        <div className='w-full h-6 px-2  bg-primary-100 border border-slate-200 shadow-3xl text-[18px] font-bold capitalize items-center tracking-wider justify-center flex  text-slate-100'>{title}</div>
    )
}
export const FilterItem = (props) => {
    const { data, onChange } = props

    return (
        <div className='gap-x-2 flex flex-row'>
            <div onClick={onChange} className='flex w-3 h-3 items-center justify-center border  border-primary-900'>{data.state ? <div className='w-full  flex h-full bg-primary-200'>
            </div> : ""}</div>
            <div className='flex  h-3 items-center justify-center text-[18px] text-slate-500 '>{data.name}</div>
        </div>
    )
}
export const FilterItemLoader = () => {


    return (
        <div className='gap-x-2 flex flex-row'>
            <div className='flex w-3 h-3 items-center justify-center border  bg-slate-200  border-primary-900'></div>
            <div className='flex w-[80px] h-3 items-center justify-center text-[12px] text-slate-400 bg-slate-200 '></div>
        </div>
    )
}

export const ShelveLoader = () => {
    return (
        <Multiple count={4} body={
            <div className='w-[320px] h-[200px] p-1'>
                <div className='w-full h-full bg-slate-200 rounded-md'></div>
            </div>} />
    )
}

export const ShelveComponent = ({ dat }) => {
    return (
        <div className='w-1/4 h-[200px] p-1'>
            <div className="group w-full h-full rounded-md relative z-0">
                <img src={dat.files[0]} alt="" className='w-full rounded-md h-full object-cover ' />
                <div className=" bg-black top-0  w-full h-full opacity-60 absolute group-hover:flex hidden   justify-center items-center z-10">
                </div>
                <div className=" bg-primary-200 rounded-t-md w-full h-8 px-2  top-0  text-slate-100 text-sm absolute flex  group-hover:hidden    justify-between items-center z-10">
                    {dat.name}{dat.featured && <div className='text-xs px-2 rounded-sm shadow-3xl bg-secondary-100'>Featured</div>}
                </div>

            </div>
        </div>
    )
}