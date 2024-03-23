import React from 'react'
import Focus from './Focus.gif'
import { Link } from 'react-router-dom'
function Errorpage() {
  return (
    <div className='h-screen w-full flex flex-row'>
      <div className='h-screen w-full sm:w-1/3 flex-col flex items-center justify-center bg-secondary-300'>
        <span className='text-center text-3xl font-bold text-white'> 404</span>
        <span className='hover:text-secondary-900'>
          <Link to="/"> Go back Home</Link>
        </span>
      </div>
      <div className='h-screen w-2/3  hidden sm:flex items-center justify-center '>
        <img src={Focus} alt='' className='h-full h-full' />

      </div>
    </div>
  )
}

export default Errorpage