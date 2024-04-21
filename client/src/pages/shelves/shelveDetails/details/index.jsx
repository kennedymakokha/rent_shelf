/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Contents from '../../../home/contents';
import TitleContainer from '../../../../containers/titleContainer';

import Modal from '../../../auth/login';
import { Ratings } from '../../../../utils/multiple';
import Details from '../../../admin/shelfeDetailContainers/details';
import { socials } from './socialItems';
import SocialItem from './socialItem';
import { socket } from '../../../../App';
import { useFetchshelvesByIDQuery } from '../../../../features/slices/shelfSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Slider from './slider';
import Sidebar from './sidebar';

function index() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const data = location.state;
    const [active, setActive] = useState(0)
    const navigate = useNavigate();

    const { data: details, refetch, isFetching } = useFetchshelvesByIDQuery(data?._id)
    let paths =
        [
            { title: "shelves", path: 'shelves' },
            { title: `${data?.name}`, path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
        ]

    useEffect(() => {
        if (data === null) {
            navigate(localStorage.getItem("lastUrl"))
        }
        socket.on("publishing", () => {
            refetch()

            if (details !== undefined && details.published === false) {
                toast(`${details.name} has been pulled down kindly check out our other shelves`)
                navigate('/shelves')
            }

        });

    }, [details, navigate, refetch])

    return (
        <Contents
            backDrop={data?.files[0]} detailed={data} title={data?.name} path={paths} bg="bg-slate-50">
            <div className="flex w-full h-auto flex-col  ">
                <div className='flex items-center w-full justify-between my-2 '>
                    <div className='flex items-center gap-x-2 '>
                        <TitleContainer title={data?.name} left />
                        <div className={`px-2 leading-4 border rounded-full h-5 ${data?.featured ? "sm:flex hidden" : "hidden"} items-center justify-center text-white bg-primary-100 text-[10px]`} onClick={() => console.log("first")}> {data?.featured ? "Featured" : ""}</div>
                    </div>
                    <div className='flex items-center gap-x-2 '>
                        <Ratings small row width={6} count={data?.ratings} />
                        <div className='sm:flex hidden gap-x-2'>
                            {socials.map((social, i) => (
                                <SocialItem setShowModal={setShowModal} key={i} social={social} />
                            ))}
                        </div>
                    </div>

                </div>
                <div className=' w-full h-full  flex flex-row '>
                    <div className=' h-auto sm:w-3/4 w-full sm:pt-0 pt-0 h-full sm:gap-y-2  flex flex-col sm:p-2 '>
                        {isFetching ? <div className='w-full h-[400px] bg-slate-300'>loading</div> :
                            <Slider data={data} setActive={setActive} active={active} />

                        }
                        <div className='bg-slate-200 rounded-md'>
                            <Details details={data} />
                        </div>

                    </div>
                    <div className=' w-1/4 h-auto px-2 pt-0 sm:flex hidden flex-col bg-slate-100 '>

                        <Sidebar data={data} />

                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </Contents >
    )
}

export default index