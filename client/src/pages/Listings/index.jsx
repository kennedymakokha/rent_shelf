
import { useFetchQuery } from "../../features/slices/townsSlice";
import { useFetchAreasQuery } from "../../features/slices/areaSlice";
import List from './list';
import House from './house.webp'

import Contents from '../home/contents';
function index() {
    const { data: towns, refetch, isSuccess, isLoading } = useFetchQuery()
    const { data: areas, isSuccess: success, } = useFetchAreasQuery()
    let paths =
        [
            { title: "Add listings", path: 'add-listing' },
            // { title:"hOME", path: `shelves/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
        ]
    return (
        <Contents backDrop={House} path={paths} title="shelves" bg="bg-slate-50">
            <List towns={isSuccess && towns} isSuccess={isSuccess} areas={areas} />
        </Contents>
    )
}

export default index