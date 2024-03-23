import React from 'react'
import Slider from './slider'
import Featured from './featured'
import Shelves from './shalves.jsx'
import Warehouse from './warehouses.jsx'
import { Multiple } from '../../utils/multiple'

function index() {
    return (
        <div className='overflow-hidden'>
            <Slider />
            <Featured />
            <Shelves />
            <Warehouse />



        </div>
    )
}

export default index