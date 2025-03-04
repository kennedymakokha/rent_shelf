import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png'
const Header = ({ heading,
    paragraph,
    linkName,
    change,
    linkUrl }) => {
   
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <div className="p-4 rounded-full flex items-center justify-center  bg-slate-100" >
                    <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        src={Logo} />
                </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold capitalize text-primary-100">
                {heading}
            </h2>
            <div className="mt-2 text-center capitalize text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium lowercase text-purple-600 hover:text-purple-500">
                    {linkName} 
                </Link>
            </div>
        </div>
    )
}
export default Header