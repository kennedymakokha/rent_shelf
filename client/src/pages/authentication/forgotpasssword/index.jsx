import React, { useState } from 'react'
import Recover from './recoverpassword'
import Reset from './resetpassword'

function index() {

    const [recover, setRecover] = useState(false)
    return (
        <>
            {recover ? <Reset /> : <Recover setRecover={setRecover} />}
        </>


    )
}

export default index