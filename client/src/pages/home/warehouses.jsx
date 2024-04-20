

import ScrollRight from './featured/scrollRight'

function index(props) {
    return (
        <>
            <ScrollRight goTo='/warehouse' data={props.data} isFetching={props.isFetching} isSuccess={props.isSuccess} left title="Warehouse" noPrice  text="text-white" bgcontainer="bg-slate-100" bg="bg-primary-500" />

        </>
    )
}

export default index