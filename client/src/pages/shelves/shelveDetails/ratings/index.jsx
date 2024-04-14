
import Ratings from './ratings';



function index({ data }) {

    return (
        <div className=' w-full min-h-[150px] pb-5 h-auto bg-white rounded-md shadow-2xl  flex flex-col '>
            <Ratings data={data} />
        </div>
    )
}

export default index



