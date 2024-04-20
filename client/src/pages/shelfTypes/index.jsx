import React, { useEffect, useState } from 'react'
import Contents from '../home/contents'
import Bg from './Bg.jpg'
import Tab from '../../containers/tabs.jsx'
import FeaturedCard from '../home/featured/components/featuredCard.jsx'

import { Multiple } from '../../utils/multiple.jsx'
import ServiceCard from './serviceCard.jsx'
import TitleContainer from '../../containers/titleContainer.jsx'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Search from '../../containers/search.jsx'
// import { handleTab } from '../../utils/handleTab.jsx'
function index() {
    const [urlSting, setUrl] = useState()
    const [filter, setFilter] = useState("all");
    const [searchParams, setSearchParams] = useSearchParams();
    // let { name, town } = useParams();
    const [tabs, setTabs] = useState([
        { value: "", title: "all", label: "Select a role", state: true },
        { value: "rent-shelf", title: "Rent shelf", label: "Nurse", state: false },
        { value: "pick-up-point", title: "Pick up Point", label: "Pick up Point", state: false },
        { value: "drop-off-point", title: "Drop off Point", label: "Drop off Point", state: false },
        { value: "percel-sending", title: "Percel sending", label: "Percel sending", state: false },
        { value: "storage-unit", title: "Storage Unit", label: "Storage Unit", state: false },
        { value: "warehouse", title: "warehouse", label: "warehouse", state: false },
    ])

    let paths =
        [
            { title: "warehouse", path: 'warehouse' },
            // { title: `${data.title}`, path: `shelves/${data?.title.replace(/\s+/g, "-").toLowerCase()}` }
        ]
    var url = window.location.href;
    var lastSlashIndex = url.lastIndexOf('/');
    var lastSegment = url.substring(lastSlashIndex + 1);


    const handleTab = (title) => {

        let newTab = []
        tabs.forEach(tab => {
            if (tab.title.toLowerCase() === title.toLowerCase()) {
                let v = { ...tab, state: true }
                newTab.push(v)
                setFilter(tab.value)
                setUrl(title)
                return v;
            }
            else {
                let v = { ...tab, state: false }
                newTab.push(v)
                setUrl(title)
                return v;
            }

        });

        setTabs(newTab)

    }
    const aray1 = [1, 2, 3]
    const aray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const aray3 = [1, 2, 3, 4, 5]

    let navigate = useNavigate();

    const changeFilter = (item, e) => {
        let search;
        search = {
            // keyword:keyword,
            town: item.title,
            area: e.target.value
        }
        setSearchParams(search, { replace: false });

    };
    const searchHandler = (event) => {
        let search;
        if (event.target.value) {
            search = {
                keyword: event.target.value
            }
        } else {
            search = undefined;
        }
        setSearchParams(search, { replace: false });
    }
    return (
        <Contents
            backDrop={Bg} title={urlSting?.replace(/-/g, " ").toUpperCase()} path={paths} bg="bg-slate-50">

            <Tab data={tabs} setFilter={setFilter} setTabs={setTabs} onChange={handleTab} />


            <div className=' w-full h-full  flex flex-row '>
                <div className=' w-1/6 h-auto p-2 gap-y-2  rounded-md border border-primary-100 sm:flex hidden flex-col '>

                    <Search value={searchParams.keyword}
                        onchange={searchHandler} />
                    <TitleContainer title="Towns" />
                    {[].map((town, i) => (
                        <select key={i} onChange={(e) => changeFilter(town, e)} className='h-10 w-full capitalize flex items-center text-[20px] px-2 text-primary-100 font-semi-bold  rounded-sm shadow-[inset_-12px_-8px_40px_#46464620]'>
                            <option> {town.title}</option>
                            {[].subs.map((sub, i) => (
                                <option value={sub.title} sub key={i}>{sub}</option>
                            ))
                            }
                        </select>
                    ))}
                </div>
                <div className=' sm:w-5/6 w-full pt-0 h-full gap-y-2  flex flex-row p-2 flex-wrap  '>
                   
                    {[].map((featured, i) => (
                        <FeaturedCard noPriceBadge noPrice hide key={i} showDetails featured={featured} />
                    ))}
                </div>
            </div>

        </Contents>
    )
}

export default index