
import React from 'react'
import Loader from './Loader.jsx'

export function TableContainer(props) {
    return (
        <div className="flex flex-col">
            {props.isFetching ? <div className='flex h-[300px] w-full items-center justify-center'>
                <Loader />
            </div> : <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
        <h2 className="text-slate-500 font-bold uppercase underline m-2">
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
        <thead className="bg-gray-50">
            {props.children}
        </thead>
    )
}
export function TH(props) {
    return (

        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {props.title}
        </th>

    )
}
export function TBody(props) {
    return (

        <tbody className="bg-white divide-y divide-gray-200">
            {props.children}
        </tbody>

    )
}

