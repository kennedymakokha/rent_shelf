

import ScrollRight from './featured/scrollRight'

function index(props) {
    return (
        <ScrollRight
            data={props.data}
            isFetching={props.isFetching}
            isSuccess={props.isSuccess}
            title="Shelves You may Like 😜" opp feature  text="text-primary-100" bgcontainer="bg-white" bg="bg-slate-100" showDetails />

    )
}

export default index