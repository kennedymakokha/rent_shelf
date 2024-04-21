import React, { useEffect, useState } from 'react'
import Contents from '../home/contents'
import Bg from './Bg.jpg'
function index() {
    const [urlSting, setUrl] = useState()
    let paths =
        [
            { title: "warehouse", path: 'warehouse' },
            // { title: `${data.title}`, path: `shelves/${data?.title.replace(/\s+/g, "-").toLowerCase()}` }
        ]
    var url = window.location.href;
    var lastSlashIndex = url.lastIndexOf('/');
    var lastSegment = url.substring(lastSlashIndex + 1);
    const changeUrl = () => {
        if (urlSting !== lastSegment) {
            // window.location.reload(false)
           
            setUrl(lastSegment)
        }
    }
    useEffect(() => {
        changeUrl()
    }, [])

    return (
        <Contents
            backDrop={Bg} title={urlSting?.replace(/-/g, " ").toUpperCase()} path={paths} bg="bg-slate-50">
            <div>

            </div>
        </Contents>
    )
}

export default index