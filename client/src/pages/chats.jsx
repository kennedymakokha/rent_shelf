import React, { useEffect } from 'react'
import './chartcss.css'
import { socket } from '../App';


function Chats() {

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