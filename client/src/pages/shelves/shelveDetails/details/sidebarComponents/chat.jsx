/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react'

function Chat({ msg, setMessage, userInfo, chating, StartChat }) {
    let msgRef = useRef("")
    const [chats, seChats] = useState([
        { id: 1, msg: `Hi ${userInfo.name}` }

    ])
    const sentMsg = (msg) => {
        let newchat = [...chats]
        let newobje = {
            id: 2, msg: msg
        }
        newchat = [...newchat, newobje]
        seChats(newchat)
        setMessage("")
    }
    return (
        <div className={`flex w-full shadow-2xl	 ${!chating ? "bg-secondary-100" : "bg-primary-100"} items-center justify-center rounded-md  flex border border-slate-50 flex-col`}>
            <h2 onClick={()=>StartChat()} className='text-[20px] text-slate-100 font-bold'>{chating ? "Close  Chat window" : "Start a Chat"}</h2>
            <div className={`min-h-[100px] pt-10 bg-slate-100 ${chating ? "flex" : "hidden"} w-full relative`}>
                <div className='flex items-center  text-[12px] text-slate-400 flex-col  absolute w-full p-2 bg-transparent  top-0'>
                    {chats.map((chat, i) => (
                        <>
                            {chat.id === 1 ? <div key={i} className=' justify-start  w-full'>{chat.msg}</div> : <div className='items-center justify-end flex w-full'>{chat.msg}</div>}
                        </>
                    ))}
                </div>
                <div onClick={() => sentMsg(msg)} className='flex items-center justify-between  absolute w-full rounded-md border-slate-200 bg-transparent border  bottom-0'>
                    <input value={msg} onChange={e => setMessage(e.target.value)} className='bg-transparent text-slate-400 focus:outline-none px-2' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${msg !== "" ? "text-slate-600" : "text-slate-400"} -rotate-[45deg]`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default Chat