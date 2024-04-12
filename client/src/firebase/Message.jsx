import React, { useState } from 'react';
// import { Button, div } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Message({ show, data, setShow }) {


    return (
        show && <div className="flex h-auto p-2">
            <div className='flex w-[300px] h-auto bg-slate-50 p-2 flex-col'
                onClose={() => setShow(false)}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                }}
            >
                <div className='flex flex-col'>
                    <img src={data.image} className="rounded " alt="" />
                    <strong className="mr-auto border-b border-slate-100 w-full">{data.title}</strong>
                    <small className='text-slate-300'>12 mins ago</small>
                </div>
                <div className='text-sm m-2'>{data.body}</div>
                <div className='w-full flex items-end justify-end  '>
                    <div className="flex w-auto px-2 py-1  items-center justify-center text-white  rounded-md hover:text-secondary-100 text-sm shadow-md bg-primary-100 border" onClick={() => { window.location.replace(`${data.url}`); setShow(true) }}>Show div</div>
                </div>
            </div>

        </div>
    )
}

export default Message;
