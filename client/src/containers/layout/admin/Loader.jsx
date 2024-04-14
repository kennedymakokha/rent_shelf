
import Loading from './loading.webp'
import './spin.css'
function Loader() {
  return (
    <div className='flex items-center flex-col justify-center'>
      <img className="spin h-10 w-10" src={Loading}  alt='' />
      <span>Loading ...</span>
    </div>
  )
}

export default Loader