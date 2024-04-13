import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Contents from '../../../home/contents';
import TitleContainer from '../../../../containers/titleContainer';
import ShelveDetails from './shelveDetails';
import OverView from '../overview';
import Address from '../address';
import Features from '../features';

import Modal from '../../../auth/login';
import { FeaturedArray } from '../../../data';
import FeaturedCard from '../../../home/featured/components/featuredCard';
import ShelveImages from './shelveImages';
import { HandleConsole } from '../../../../utils/selectFromapi';
import { useFetchshelvesByIDQuery } from '../../../../features/slices/shelfSlice';
import { Ratings } from '../../../../utils/multiple';
import ImageWrap from '../../../admin/shelfeDetailContainers/imageWrap';
import Details from '../../../admin/shelfeDetailContainers/details';



function index(props) {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const data = location.state;
    const { data: details, refetch, isFetching } = useFetchshelvesByIDQuery(data._id)
    HandleConsole(data)
    let paths =
        [
            { title: "shelves", path: 'shelves' },
            { title: `${data?.name}`, path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
        ]
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let image = randomIntFromInterval(1, data?.files.length)

    return (
        <Contents
            backDrop={data?.files[image]} detailed={data} title={data?.name} path={paths} bg="bg-slate-50">
            <div className='flex items-center w-full justify-between my-2 '>
                <div className='flex items-center gap-x-2 '>
                    <TitleContainer title={data.name} left />
                    <div className={`px-2 leading-4 border rounded-full h-5 ${data?.featured ? "flex" : "hidden"} items-center justify-center text-white bg-primary-100 text-[10px]`} onClick={() => publish()}> {data?.featured ? "Featured" : ""}</div>
                </div>
                <div className='flex items-center gap-x-2 '>
                    <Ratings small row width={6} count={data?.ratings} />
                    <div className={`px-2  ${data?.published ? "border border-secondary-200 bg-secondary-300 text-primary-100" : "border bg-primary-300 text-white  border-primary-200"}  rounded-md text-[14px]`} onClick={() => publish()}> {!data?.published ? "Unpublish" : "Publish"}</div>
                </div>
            </div>

            <div className="flex w-full h-auto flex-col  ">

                <div className=' w-full h-full  flex flex-row '>
                    <div className=' h-auto sm:w-3/4 w-full sm:pt-10 pt-0 h-full sm:gap-y-2  flex flex-col sm:p-2 '>
                        <ImageWrap details={data} />
                        <Details details={data} />
                    </div>
                    <div className=' w-1/4 h-auto p-2 pt-10 sm:flex hidden flex-col '>
                        <TitleContainer title="Featured Shelves" />
                        <div className=' w-full h-[300px]  flex flex-row overflow-x-scroll scrollbar-hide'>
                            {FeaturedArray.filter(e => e.featured).map((featured, i) => (
                                <Link key={i} state={props.featured} to={`/shelves/${props?.featured?.name?.replace(/\s+/g, "-").toLowerCase()}`} className=" w-full  h-full group shrink-0  p-2 flex justify-center items-center">
                                    {/* <FeaturedCard hide sidebadge featured={featured} /> */}
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </Contents>
    )
}

export default index