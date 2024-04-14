

import ScrollRight from './scrollRight'

function index(props) {
    
    return (<>

        <ScrollRight title="Featured Shelves" data={props?.data} isFetching={props?.isFetching}  text="text-secondary-100" bgcontainer="bg-slate-100" bg="bg-primary-100" showDetails />


    </>

    )
}

export default index