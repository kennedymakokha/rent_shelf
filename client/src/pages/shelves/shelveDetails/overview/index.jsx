
import OverView from './overview';



function index({ data }) {

    return (
        <div className=' w-full sm:min-h-[150px] pb-10 h-auto bg-white rounded-md shadow-2xl  flex flex-col '>
            <OverView data={data} />
        </div>
    )
}

export default index



