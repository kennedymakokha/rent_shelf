import React from 'react'
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../../../containers/titleContainer';
import { socials } from './socialItems';
import SocialItem from './socialItem';



function ShelveDetails({data, showModal, setShowModal}) {


  return (
   
      <div className=' w-full h-auto pb-10 bg-white rounded-sm shadow-2xl  flex flex-col '>
        <div className=' px-2 flex w-full items-center flex-row h-20 justify-between'>
          <div className='flex bg-primary-100 text-white uppercase rounded-sm px-2 w-[100px] shadow-sm items-center justify-between'>
            Rent It
          </div>
          <div className='sm:flex hidden w-1/2 items-center  justify-end'>
            <div className={`flex-row  gap-x-1 flex transition duration-50 fade-in`} >
              {socials.map((social, i) => (
                <SocialItem setShowModal={setShowModal} key={i} social={social} />
              ))}
            </div>
          </div>
        </div>
        <TitleContainer left title={data?.title} />
        <p className='text-slate-400 px-3 text-justified '>{data?.description}</p>
      </div>
    
  )
}

export default ShelveDetails



