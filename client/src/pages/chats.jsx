import React, { useEffect } from 'react'
import './chartcss.css'
// import { io } from 'socket.io-client'
// const socket = io("http://localhost:5000");


function Chats() {



    // useEffect(() => {
    //     console.log("first")
    //     socket.on("connect", () => {
    //         console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    //     });

    //     socket.on("disconnect", () => {
    //         console.log(socket.id); // undefined
    //     });
    // }, [])

    const onChangeInput = (e) => {
        const { value } = e.target
        if (value) {
            socket.emit('chat message', value);
            // value = '';
        }
    }
    return (
        <div className='bog'>
            <ul id="messages"></ul>
            <form id="form" action="">
                <input id="input" onChange={onChangeInput}
                    onKeyDown={() => socket.emit('typing', "")}
                    autocomplete="off" /><button>Send</button>
            </form>


        </div>
    )
}

export default Chats