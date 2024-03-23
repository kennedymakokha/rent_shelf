import React, { useEffect, useState } from 'react'
import Contents from '../home/contents'
import Bg from './Bg.jpg'
import Tab from '../../containers/tabs.jsx'
import FeaturedCard from '../home/featured/components/featuredCard.jsx'
import { FeaturedArray, WarehouseArray } from '../data.js'
import { Multiple } from '../../utils/multiple.jsx'
import ServiceCard from './serviceCard.jsx'
// import { handleTab } from '../../utils/handleTab.jsx'
function index() {
    const [urlSting, setUrl] = useState()
    const [filter, setFilter] = useState("all");
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
    // console.log(lastSegment.replace(/-/g, " "))
    useEffect(() => {
        // setFilter(lastSegment.toLowerCase())
        // handleTab(lastSegment.toLowerCase())
    }, [urlSting])

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
    return (
        <Contents
            backDrop={Bg} title={urlSting?.replace(/-/g, " ").toUpperCase()} path={paths} bg="bg-slate-50">
            <div>
                <Tab data={tabs} setFilter={setFilter} setTabs={setTabs} onChange={handleTab} />
            </div>
            <div className='flex flex-wrap w-full flex-row '>
                {FeaturedArray.map((featured, i) => (
                    <FeaturedCard hide key={i} showDetails featured={featured} />
                ))}
                {/* {urlSting === "Rent shelf" ? aray1.map((ar, i) => (
                    <ServiceCard bg={Bg} />
                )):aray2.map((ar, i) => (
                    <ServiceCard bg={Bg} />
                ))} */}


            </div>


        </Contents>
    )
}

export default index