/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Accodion from '../accodion'
import logo from './../../assets/logotrans.png'
function Footer() {


    const accordionData = [
        {
            title: 'About Us',
            content: [{
                title: 'Wasange Rd TimsPlaza', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 group-hover:text-slate-100 h-5 text-secondary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>,
                url: "",

            }, {
                title: '+254716017221', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 group-hover:text-slate-100 text-secondary-100 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>, url: "",

            },
            {
                title: 'rentinfo@rentshelf.co.ke', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 group-hover:text-slate-100 h-5 text-secondary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>, url: "",


            },
            {
                title: 'rentshelf.co.ke', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 group-hover:text-slate-100 h-5 text-secondary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>,
                url: "",



            }]
        },
        {
            title: 'Quick Links',
            content: [{
                title: 'Home',
                url: "/",

            }, {
                title: 'About us', url: "/about-us",

            },
            {
                title: 'Shalves', url: "/shalves",


            },
            {
                title: 'services',
                url: "/services",

            },
            {
                title: 'Contact us',
                url: "/contact-us",

            }]
        },
        {
            title: 'Section 3',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
    ];
    const Title = ({ title }) => {
        return (
            <h2 className='flex text-[18px] font-semibold text-secondary-100 underline  text-center justify-center  items-center'>{title}</h2>
        )
    }
    const AddressContainer = ({ icon, title, url }) => {
        return (
            <div className={`flex group  gap-x-2`}>
                {icon && <div className=' flex w-6 h-6 border group-hover:border-slate-400 border-secondary-100 justify-center items-center'>
                    {icon}
                </div>}
                <Link to={url} className={`  ${url ? "text-blue-100 group-hover:underline" : "text-slate-400"} group-hover:text-secondary-400 text-[18px]`}> {title}</Link>
            </div>
        )
    }
    return (


        <div className="flex flex-col w-full bg-primary-300 px-12">
            <div className="w-full h-[220px] py-2 flex ">
                <div className="w-1/4 border-r  border-l p-2 border-dotted border-secondary-100 h-full flex flex-col ">
                    <div className='flex  flex-col '>
                        <div className='flex items-center justify-center'>
                            <div className=' bg-slate-50 rounded-sm  p-2  flex  items-center justify-center'>
                                <img src={logo} alt='' className='w-20 h-10 object-fit' />
                            </div>

                        </div>
                        <div>
                            <Title title="About Us" />
                            <div className=' flex flex-col w-full'>
                                {accordionData[0].content.map((acc, i) => (
                                    <AddressContainer key={i} icon={acc.icon} title={acc.title} />
                                ))}
                            </div>
                        </div>
                        {/* <Accodion content={[{ title: "About", url: "/about" }]} title="About" /> */}
                    </div>

                </div>
                <div className="w-1/4 mt-2 border-r  p-2 border-dotted border-secondary-100  h-full flex flex-col ">
                    <Title title="Quick Links" />
                    <div className=' flex px-2 items-center flex-col w-full'>
                        {accordionData[1].content.map((acc, i) => (
                            <AddressContainer key={i} icon={acc.icon} url={acc.url} title={acc.title} />
                        ))}
                    </div>

                </div>
                <div className="w-1/4 mt-2 border-r  p-2 border-dotted border-secondary-100  h-full flex flex-col ">
                    <Title title="Quick Links" />
                    <div className=' flex px-2 items-center flex-col w-full'>
                        {accordionData[1].content.map((acc, i) => (
                            <AddressContainer key={i} icon={acc.icon} url={acc.url} title={acc.title} />
                        ))}
                    </div>

                </div>
                <div className="w-1/4 mt-2  h-[200px] border-r  p-2 border-dotted border-secondary-100   flex flex-col ">
                    <div className=' flex px-2 items-center border border-primary-100  w-full h-full flex-col w-full'>
                        <h2 className='font-bold text-2xl text-secondary-100'>SUBSCRIBE TO MAIL!</h2>
                        <p className='text-[18px] text-center text-slate-100'>Get our Daily email n.ewsletter with Special Services, Updates, Offers and more</p>
                        <div className='flex mt-10 border border-primary-200 bottom-0 static w-full h-10'>
                            <input type="text" placeholder='Email' className='focus:outline-none  px-2 h-full w-[60%]' />
                            <div className='flex w-[40%]  px-2 text-[18px] shadow-2xl items-center justify-center text-white bg-primary-100 '>SUBSCRIBE </div>
                        </div>
                    </div>

                </div>

            </div>
            <footer className="bg-primary-100 rounded-lg shadow  dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="sm:text-sm text-[10px] text-secondary-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Rent Shelf™</a>. All Rights Reserved.
                    </span>
                    <ul className="sm:flex hidden flex-wrap items-center sm:mt-3 mt-1 sm:text-sm text-[10px] font-medium text-secondary-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline sm:me-4 me-1 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline sm:me-4 me-1 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline sm:me-4 me-1 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    )
}

export default Footer