/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import What from './../../../../../assets/wat.webp'
function SafetyCard({ data }) {
    return (
        <div className='flex w-full shadow-2xl p-2	 bg-white rounded-md h-[250px] border border-slate-50 flex-col'>
            <h2 className='text-[18px] font-bold uppercase text-primary-100 text-center'> Safety First</h2>
            <ul className='text-[18px] list-disc text-slate-400 px-10 list-bullets'>
                <li>
                    Avoid Sending any Payments
                </li>
                <li>Meet The lord/agents physically in safe public space</li>
                <li>Inspect the space/propety and be sure of your venture </li>
                <li>Check all that needs to be checked before you pay </li>
            </ul>
        </div>
    )
}

export default SafetyCard