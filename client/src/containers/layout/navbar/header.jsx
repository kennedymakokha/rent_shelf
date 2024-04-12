
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './style.css'
import Logo from './../../../assets/logo.png'
import MobileNav from './components/MobileNav.jsx';
import { useDispatch, useSelector } from 'react-redux';
import ListingModal from './ListingsModal.jsx';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFetchQuery } from '../../../features/slices/townsSlice.jsx';

import { logout } from '../../../features/slices/authSlice';
import { useFetchTownAreasQuery } from '../../../features/slices/areaSlice.jsx';
import { useFetchTypeQuery } from '../../../features/slices/typeSlice.js';
import { useFetchFeatureQuery } from '../../../features/slices/featureSlice.jsx';
import { useLogoutMutation } from '../../../features/slices/usersApiSlice.js';
import { HandleArray, HandleConsole } from '../../../utils/selectFromapi.jsx';
import { DropDown } from '../../DropDown.jsx';
// import { Dropdown } from './../../DropDown.jsx';
const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [town, setTown] = useState(false)

  const { userInfo } = useSelector((state) => state.auth)
  
  const navigate = useNavigate()
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch()
  const { data: towns, refetch, isSuccess, isLoading } = useFetchQuery()
  const { data: areas, refetch: { refetchAreas }, isSuccess: success, } = useFetchTownAreasQuery(town)
  const { data: types, isSuccess: typesuccess, } = useFetchTypeQuery()
  const { data: features, isSuccess: fearesuccess, } = useFetchFeatureQuery()


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
    <header>
      <div className="nav-area ">
        <Link to="/" className="logo">
          <img src={Logo} alt='' className='h-14' />
        </Link>
        <div className='flex gap-x-2'>
          <Navbar />
          <MobileNav />

          {userInfo && <div className='sm:flex hidden items-center justify-center  gap-x-0'>

            <DropDown title={userInfo?.name} array={[{
              title: "Profile", onclick: () => console.log("first")
            },
            {
              title: "Logout", onclick: LogOutHandler
            }]} />

          </div>}
          <div onClick={addListings} className='sm:flex hidden group px-4 py-2 items-center border hover:border-secondary-100  border-primary-200 rounded-md justify-center gap-x-2'>
            <span className='group-hover:text-secondary-100 text-primary-200'>Add Listing</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-secondary-100 text-primary-200">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
        </div>
      </div>
      <ListingModal showModal={showModal} changeTown={changeTown} setTown={setTown} types={newTypesArray} featuresArray={featuresArray} typesuccess={typesuccess} areas={areas} towns={towns} isSuccess={isSuccess} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;