/* eslint-disable react/prop-types */


import Loader from './Loader.jsx'
import { Paginator } from './../../../utils/multiple.jsx'
export function TableContainer(props) {
    const { filter, prev, next, page, setLimit, paginate } = props
    return (
        <div className="flex flex-col w-full">

            {props.isFetching ? <div className='flex h-[300px] w-full items-center justify-center'>
                <Loader />
            </div> :
                <div className="my-0 overflow-x-auto sm:-mx-6 w-full lg:-mx-8">

                    <div className="py-0 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <div className='w-full px-20 items-center flex justify-between'>
                                <h2>{props.tableTitle}</h2>
                                <select className='text-sm border rounded-md px-2 text-slate-400 bg-transparent float-right focus:outline-none' onChange={setLimit}>
                                    <option >Select Limit </option>
                                    <option value={2}>2</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                </select>

                            </div>
                            {props.children}
                            {props.paginate && <div className='flex w-full min-w-[200px] items-center justify-center '>
                                <div className='flex border-slate-200 px-2  items-center '>
                                    {filter.page > 1 ? <span className='text-sm text-slate-500 ' onClick={filter.page > 1 ? () => prev() : null}>{filter.page > 1 ? "Prev" : "Null"}</span> : null}
                                    {<Paginator page={page} count={props.paginate} />}
                                    {filter.page < paginate ? <span className='text-sm text-slate-500 ' onClick={async () => next()}>Next</span> : null}

                                </div>
                            </div>}
                        </div>
                    </div>

                </div>}
        </div>
    )
}
export function TableTitle(props) {
    const { onchange, notitle, Search,noSearch, value } = props
    return (
        <div className={`flex gap-x-2  w-full items-center ${notitle ? " px-20 flex  w-full" : "justify-between"}`}>
            {!notitle && < h2 className="text-primary-100  text-[20px] uppercase underline m-2">
                {props.tableTitle}
            </h2>}
            {!noSearch && <div className={`flex items-center w-full`}>
                <input onChange={onchange} value={value} placeholder='Search' type="text" className={`h-9 appearance-none my-2 relative block ${notitle ? "w-full" : "w-[100%]"} rounded-l-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 focus:z-10 sm:text-[18px] text-sm`} />
                <div onClick={Search} className=' h-9 bg-primary-100 px-2  rounded-r-md sm:text-[18px] my-2  hover:bg-slate-600 items-center justify-center flex text-slate-100 hover:text-slate-800'>Search </div>
            </div>}

        </div >
    )
}


export default function Table(props) {

    return (
        <table className="min-w-full w-full  ">

            {props.children}

        </table>
    )
}
export function TableHead(props) {
    return (
        <thead className="bg-gray-200 w-full">
            {props.children}
        </thead>
    )
}
export function TH(props) {
    return (

        <th
            scope="col"
            className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {props.title}
        </th>

    )
}
export function TBody(props) {
    return (

        <tbody className="bg-slate-50  w-full text-gray-500 divide-y divide-gray-200">
            {props.children}
        </tbody>

    )
}
export const Tdata = (props) => {

    return (<td className={`px-6 py-1 text-sm   text-gray-500 font-normal whitespace-nowrap`}>
        {props.array ?
            <ul>
                {props?.array?.map((arr, i) => (
                    <li key={i}>{arr.name}</li>
                ))}

            </ul> :

            <div onClick={() => props.onClick(props.id)} className={`${props.onClick && "hover:bg-green-200 cursor-pointer"} ${props.badge ? `border ${props.boolean ? "border-green-200 bg-green-100" : "border-red-200  text-primary-100 bg-red-100"} text-[10px] flex items-center justify-center px-2 rounded-full ` : ""}`}> {props.loading ? "Loading" : props.title}</div>}

    </td>)
}

