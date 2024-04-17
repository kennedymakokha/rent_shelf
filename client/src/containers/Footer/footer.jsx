/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Accodion from '../accodion'
import logo from './../../assets/logotrans.png'
import { accordionData } from './accodionData.jsx';
import { AddressContainer, FooterItemContainer, SubScribeContainer, Title } from './container.js';
function Footer() {



    return (


        <div className="flex  flex-col w-full sm:bg-primary-300 bg-white lg:px-12 overflow-hidden ">
            <div className="w-full sm:h-[250px] sm:flex hidden sm:flex-row flex-col py-2  ">
                <FooterItemContainer
                    body={<div className='flex  flex-col '>
                        <div className='flex items-center justify-center'>
                            <div className=' bg-slate-50 rounded-sm  p-2  flex  items-center justify-center'>
                                <img src={logo} alt='' className='w-20 h-10 object-fit' />
                            </div>

                        </div>
                        <div>
                            <Title title="About Us" />
                            <div className=' flex  flex-col w-full'>
                                {accordionData[0].content.map((acc, i) => (
                                    <AddressContainer key={i} icon={acc.icon} title={acc.title} />
                                ))}
                            </div>
                        </div>
                    </div>
                    } />
                <FooterItemContainer title="Quick Links" body={<div className=' flex sm:px-2 sm:items-center items-start  flex-col w-full'>
                    {accordionData[1].content.map((acc, i) => (
                        <AddressContainer key={i} icon={acc.icon} url={acc.url} title={acc.title} />
                    ))}
                </div>} />
                <FooterItemContainer title="Quick Links" body={<div className=' flex sm:px-2 sm:items-center items-start  flex-col w-full'>
                    {accordionData[1].content.map((acc, i) => (
                        <AddressContainer key={i} icon={acc.icon} url={acc.url} title={acc.title} />
                    ))}
                </div>} />
                <FooterItemContainer body={
                    <SubScribeContainer />
                } />
            </div>
            <div className='flex  w-full flex-col sm:hidden'>
                <Accodion data={accordionData} title="About" />
                <SubScribeContainer />
            </div>
            <footer className="bg-primary-100 px-12 sm:rounded-lg shadow  dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="sm:text-sm text-[10px] text-secondary-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Rent Shelf™</a>. All Rights Reserved.
                    </span>
                    <ul className="sm:flex hidden flex-wrap items-center sm:mt-3 mt-1 sm:text-sm text-[10px] font-medium text-secondary-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/about-us" className="hover:underline sm:me-4 me-1 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy-&-licencing" className="hover:underline sm:me-4 me-1 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy-&-licencing" className="hover:underline sm:me-4 me-1 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    )
}

export default Footer