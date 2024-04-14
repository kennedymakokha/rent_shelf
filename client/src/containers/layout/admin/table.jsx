

import Loader from './Loader.jsx'

export function TableContainer(props) {
    return (
        <div className="flex flex-col">
            {props.isFetching ? <div className='flex h-[300px] w-full items-center justify-center'>
                <Loader />
            </div> : <div className="my-0 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-0 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <h2>{props.tableTitle}</h2>
                        {props.children}
                    </div>
                </div>
            </div>}
        </div>
    )
}
export function TableTitle(props) {
    return (
        <h2 className="text-primary-100  text-[20px] uppercase underline m-2">
            {props.tableTitle}
        </h2>
    )
}


export default function Table(props) {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            {props.children}
        </table>
    )
}
export function TableHead(props) {
    return (
        <thead className="bg-gray-200">
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

        <tbody className="bg-slate-50   text-gray-500 divide-y divide-gray-200">
            {props.children}
        </tbody>

    )
}
export const Tdata = (props) => {

    return (<td className={`px-6 py-1 text-sm  text-gray-500 font-normal whitespace-nowrap`}>
        {props.array ?
            <ul>
                {props?.array?.map((arr, i) => (
                    <li key={i}>{arr.name}</li>
                ))}

            </ul> :

            <div className={`${props.badge ? `border ${props.boolean?"border-green-200 bg-green-100":"border-red-200  text-primary-100 bg-red-100"} text-[10px] flex items-center justify-center px-2 rounded-full ` : ""}`}> {props.title}</div>}

    </td>)
}

