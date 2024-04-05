
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
import { useFetchAreasQuery } from '../../../features/slices/areaSlice.jsx';
import { useFetchTypeQuery } from '../../../features/slices/typeSlice.js';
import { useFetchFeatureQuery } from '../../../features/slices/featureSlice.jsx';
import { useLogoutMutation } from '../../../features/slices/usersApiSlice.js';
import { HandleArray } from '../../../utils/selectFromapi.jsx';
const Header = () => {
  const [showModal, setShowModal] = useState(false)


  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch()
  const { data: towns, refetch, isSuccess, isLoading } = useFetchQuery()
  const { data: areas, isSuccess: success, } = useFetchAreasQuery()
  const { data: types, isSuccess: typesuccess, } = useFetchTypeQuery()
  const { data: features, isSuccess: fearesuccess, } = useFetchFeatureQuery()


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
      await logoutApiCall({token:"token"}).unwrap()
      dispatch(logout({ id: userInfo.id, token: localStorage.getItem('token') }))
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const DropDown = ({ title, array }) => {
    return (
      <div className="px-10 text-[18px]">
        <div className="dropdown  bg-[red] inline-block relative  rounded-full">
          <button className="bg-white text-[gray]  hover:text-[#199e9e] font-semibold py-2 px-4  inline-flex items-center">
            <span className="mr-1">{title}</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <ul className="dropdown-menu absolute  w-[100%]  hidden   text-gray-700 pt-1 z-40">
            {array.map((arr, i) => (
              <li className=" bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap" key={i} onClick={arr.onclick}>
                {arr.title}</li>
            ))}
          </ul>
        </div>

      </div>
    )
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
      <ListingModal showModal={showModal} types={newTypesArray} featuresArray={featuresArray} typesuccess={typesuccess} areas={areas} towns={towns} isSuccess={isSuccess} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;