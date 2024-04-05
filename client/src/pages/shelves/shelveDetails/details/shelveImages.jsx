import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import TitleContainer from '../../../../containers/titleContainer';
import { socials } from './socialItems';
import SocialItem from './socialItem';
import ScrollRight, { ScrollImagesRight } from '../../../home/featured/scrollRight';



function ShelveImages({ data, showModal, setShowModal }) {

  const [index, setIndex] = useState([0])
  return (

    <div className=' w-full h-[400px] pb-10 bg-white rounded-sm shadow-2xl  flex flex-col  bg-transparent w-full h-full relative z-0'>

      <div className=' w-full  flex flex-row overflow-x-scroll scrollbar-hide'>
        <img src={data.files[`${index}`]} className='h-[400px]  w-full object-cover' alt='' />

      </div>
      {data.files.length > 0 && <div onClick={() => setIndex(index + 1)} className="absolute  top-[40%]  right-10 flex justify-between items-between z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-8 h-8 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>}


      {/* <ScrollImagesRight  array={data.files} text="text-secondary-100" bgcontainer="bg-slate-100" bg="bg-primary-100"  /> */}

    </div>

  )
}

export default ShelveImages



