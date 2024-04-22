/* eslint-disable react/prop-types */

// import ContentLoader from "react-content-loader"
import ContentLoader from "react-content-loader"
import { Multiple } from "../../utils/multiple"
import { Link } from "react-router-dom"
import { handleurl } from "../../utils/handleUrl"

// eslint-disable-next-line react/prop-types
export const FilterTitle = ({ title, topRounded }) => {
    return (
        <div className={`w-full  px-1  bg-primary-100 border border-slate-200 shadow-3xl text-[18px] font-bold ${topRounded ? " rounded-t-md h-[32px]" : "h-6"} capitalize items-center tracking-wider justify-center flex  text-slate-100`}>{title}</div>
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

            {/* <Cloader w={3} h={3}/> */}
            <div className='flex w-3 h-3 items-center justify-center   '>
                <ContentLoader backgroundColor="#99a5b4" viewBox="0 0 40 40">
                    <rect x="0" y="0" rx="0" ry="1" width="40" height="40" />
                </ContentLoader>
            </div>
            <div className='flex w-[150px] h-3 items-center justify-center text-[12px] text-slate-400 bg-slate-200 '>
                <ContentLoader backgroundColor="#99a5b4" viewBox="0 0 150 13">
                    <rect x="0" y="0" rx="0" ry="1" width="150" height="40" />
                </ContentLoader>
            </div>
        </div>
    )
}


export const ShelveLoader = () => {
    return (

        <Multiple wrap width="w-[1280px]" count={12} body={
            <div className='w-[300px] h-[200px] p-1'>
                <ContentLoader backgroundColor="#99a5b4" viewBox="0 0 318 200">
                    <rect x="0" y="0" rx="5" ry="5" width="318" height="200" />
                </ContentLoader>

            </div>} />
    )
}

export const ShelveComponent = ({ dat }) => {
    return (
        <Link onClick={() => localStorage.setItem("lastUrl", handleurl(location.pathname, 1))} state={dat} to={`/shelves/${dat?.name?.replace(/\s+/g, "-").toLowerCase()}`} className='sm:w-1/4 w-full h-[200px] p-1'>
            <div className="group w-full h-full rounded-md relative z-0">
                <img src={dat.files[0]} alt="" className='w-full rounded-md h-full object-cover ' />
                <div className=" bg-black top-0  w-full h-full opacity-60 absolute group-hover:flex hidden   justify-center items-center z-10">
                </div>
                <div className=" bg-primary-200 rounded-t-md w-full h-8 px-2  top-0  text-slate-100 text-sm absolute flex  group-hover:hidden    justify-between items-center z-10">
                    {dat.name}{dat.featured && <div className='text-xs px-2 rounded-sm shadow-3xl bg-secondary-100'>Featured</div>}
                </div>

            </div>
        </Link>
    )
}