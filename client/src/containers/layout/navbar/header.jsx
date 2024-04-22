/* eslint-disable no-unused-vars */

import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './style.css'
import Logo from './../../../assets/logotrans.png'
import MobileNav from './components/MobileNav.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ListingModal from './ListingsModal.jsx';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useFetchQuery } from '../../../features/slices/townsSlice.jsx';

import { logout } from '../../../features/slices/authSlice';
import { useFetchTypeQuery } from '../../../features/slices/typeSlice.js';
import { useLogoutMutation } from '../../../features/slices/usersApiSlice.js';
import { HandleArray } from '../../../utils/selectFromapi.jsx';
import { DropDown } from '../../DropDown.jsx';
import { useFetchsinglePropertyQuery } from '../../../features/slices/propertySlice.jsx';
// import { Dropdown } from './../../DropDown.jsx';
const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [town, setTown] = useState("")
  const [subCategory, setsubCategory] = useState("")

  const { userInfo } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch()
  const { data: towns, isSuccess } = useFetchQuery()
  // const { data: areas, } = useFetchTownAreasQuery(town)
  const { data: types, isSuccess: typesuccess, } = useFetchTypeQuery()
  const { data: features, refetch: fetchprop, } = useFetchsinglePropertyQuery(subCategory)
  // const { data: features, } = useFetchFeatureQuery()


  const changeTown = (town) => {
    setTown(town)
  }

  let newTypesArray = HandleArray(types)
  let featuresArray = HandleArray(features)
  const addListings = () => {
    if (!userInfo) {
      navigate('login')
      toast.info('Kindly login first')
    } else {
      setShowModal(true)
    }
  }

  const LogOutHandler = async () => {
    try {
      await logoutApiCall({ token: "token" }).unwrap()
      dispatch(logout({ id: userInfo.id, token: localStorage.getItem('token') }))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className={`bg-gradient-to-t  from-primary-100 via-primary-200 to-primary-300`}>
      <div className="nav-area ">
        <Link to="/" className="logo">
          <img src={Logo} alt='' className='h-14' />
        </Link>
        <div className='flex gap-x-2'>
          <Navbar />
          <MobileNav />
          {userInfo?.role === "owner" &&
            <div className='sm:flex hidden rounded-sm items-center justify-center text-[18px] font-semi-bold px-2 '>
              <div onClick={() => addListings()} className='flex gap-x-2 items-center justify-center text-[18px] border-secondary-100 hover:border-slate-200 bg-transparent hover:bg-primary-100 rounded-sm font-semibold px-2 border text-[gray] hover:text-white  '>
                <span className='group-hover:text-secondary-100 text-white'>Add Listing</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-secondary-100 text-primary-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div></div>}
          {userInfo ? <div className='sm:flex hidden items-center justify-center  gap-x-0'>

            <DropDown title={userInfo?.name} array={[{
              title: "Profile", onclick: () => console.log("first")
            },
            {
              title: "Logout", onclick: LogOutHandler
            }]} />

          </div> : <div className='sm:flex hidden items-center justify-center text-[18px] font-semi-bold px-2 '>
            <div onClick={() => navigate('/login')} className='flex items-center justify-center text-[18px] border-secondary-100 hover:border-slate-200 bg-transparent hover:bg-primary-100 rounded-sm font-semibold px-2 border text-[gray] hover:text-white  '>Login
            </div></div>}

        </div>
      </div>
      <ListingModal showModal={showModal} setsubCategory={setsubCategory} changeTown={changeTown} setTown={setTown} types={newTypesArray} featuresArray={featuresArray} typesuccess={typesuccess} towns={towns} isSuccess={isSuccess} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;