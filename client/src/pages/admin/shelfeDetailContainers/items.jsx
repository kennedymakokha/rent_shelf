/* eslint-disable react/prop-types */
import { Multiple, Ratings } from "../../../utils/multiple"
import Shelf from './../../../assets/shelf.svg'
export const DetailItem = (props) => {
    return (
        <div className='flex gap-x-2  h-auto  items-center    text-[18px]'>
            <div className='flex font-bold text-primary-100 w-[70px]'>{props.label}:</div>
            <div className='flex font-normal capitalize text-slate-400'>{props.value}</div>
        </div>
    )
}
export const Title = ({ title, auto }) => {
    return (
        <h2 className={`capitalize text-center ${auto && "w-auto"} font-bold sm:text-primary-100 text-secondary-100 border-b mb-3`}>{title}</h2>
    )
}

export const ImagePlaceHolder = ({ details }) => {
    return (
        <div className={` w-full rounded-md group hidden  sm:flex relative z-0`}>
            <img src={Shelf} alt='' className={`w-full flex h-full items-center justify-center rounded-md  `} />
            <div className={`absolute  rounded-md  ${!details.name && "group-hover:opacity-20"} m-2 bg-primary-100 opacity-50  inset-0 flex justify-center items-center z-10`}>
                <p className={`text-xl  ${!details.name ? "group-hover:flex text-red-100 hidden" : "group-hover:text-white"}  text-secondary-100 font-bold`}>{details.name ? details.name : "comming soon"}</p>
            </div>
        </div>

    )
}
export const RateItem = (props) => {
    return (
        <Multiple count={1} row body={
            <div className='flex items-center justify-center h-4  text-slate-500  font-bold text-[18px]'>
                <Ratings small row width={2} count={props?.rate} />..................<span className=' text-slate-400 font-normal  text-[18px]'>{props.perc}%</span>
            </div>
        } />
    )
}
