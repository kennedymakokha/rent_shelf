import { Multiple, Ratings } from "../../../utils/multiple"

export const DetailItem = (props) => {
    return (
        <div className='flex gap-x-2 -gap-y-10 h-5  items-center  py-3  text-[14px]'>
            <div className='flex font-bold text-primary-100 w-[60px]'>{props.label}:</div>
            <div className='flex font-normal text-slate-400'>{props.value}</div>
        </div>
    )
}
export const RateItem = (props) => {
    return (
        <Multiple count={1} row body={
            <div className='flex items-center h-4  text-slate-300  font-bold text-[8px]'>
                <Ratings small row width={2} count={props?.rate} />.................................<span className=' text-slate-400 font-normal  text-[10px]'>{props.perc}%</span>
            </div>
        } />
    )
}
