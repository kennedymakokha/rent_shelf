import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Contents from '../../../home/contents';
import TitleContainer from '../../../../containers/titleContainer';
import ShelveDetails from './shelveDetails';
import OverView from '../overview';
import Address from '../address';
import Features from '../features';
import Ratings from '../ratings';
import Modal from '../../../auth/login';
import { FeaturedArray } from '../../../data';
import FeaturedCard from '../../../home/featured/components/featuredCard';



function index(props) {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const data = location.state;
    console.log(data)
    let paths =
        [
            { title: "shelves", path: 'shelves' },
            { title: `${data?.title}`, path: `shelves/${data?.title.replace(/\s+/g, "-").toLowerCase()}` }
        ]

    return (
        <Contents
            backDrop={data?.image} title={data?.title} path={paths} bg="bg-slate-50">
            <div className="flex w-full h-auto flex-col  ">
                {/* <TitleContainer title={data.title} /> */}
                <div className=' w-full h-full  flex flex-row '>
                    <div className=' sm:w-3/4 w-full pt-10 h-full gap-y-2  flex flex-col p-2 '>
                        <ShelveDetails showModal={showModal} setShowModal={setShowModal} data={data} />
                        <Address showModal={showModal} setShowModal={setShowModal} data={data} />
                        <OverView showModal={showModal} setShowModal={setShowModal} data={data} />
                        {data?.featured && <Features showModal={showModal} setShowModal={setShowModal} data={data} />}
                        <Ratings showModal={showModal} setShowModal={setShowModal} data={data} />
                    </div>
                    <div className=' w-1/4 h-auto p-2 pt-10 sm:flex hidden flex-col '>
                        <TitleContainer title="Featured Shelves" />
                        <div className=' w-full h-[300px]  flex flex-row overflow-x-scroll scrollbar-hide'>
                            {FeaturedArray.filter(e => e.featured).map((featured, i) => (
                                <Link key={i}  state={props.featured} to={`/shelves/${props?.featured?.title.replace(/\s+/g, "-").toLowerCase()}`} className=" w-full  h-full group shrink-0  p-2 flex justify-center items-center">
                                    <FeaturedCard hide sidebadge featured={featured} />
                                </Link>
                            ))}
                        </div>
                        {/* <div className=' w-full  h-[200px] bg-white rounded-sm shadow-2xl  flex flex-col '>
                       
                        </div> */}
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </Contents>
    )
}

export default index