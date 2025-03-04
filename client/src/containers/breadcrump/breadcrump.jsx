/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

function Breadcrump(props) {
    return (
        <>
            <div className="bg-white sm:py-4 py-1 flex items-center sm:px-10 px-4 rounded-md shadow-2xl flex-wrap">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <Link to="/" className="text-gray-600 hover:text-blue-500">
                            <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                        </Link>
                        <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </li>

                    {props?.paths?.map((path, i) => (
                        <li key={i} className="inline-flex items-center">
                            <Link to={`/${path?.path}`} className={`text-gray-600 ${props.paths.length - 1 !== i ? "hover:text-blue-500 text-blue-500" : "text-gray-400"} sm:text-[16px] text-[10px] capitalize hover:text-blue-500`}>
                                {path?.title.toLowerCase()}
                            </Link>

                            {props.paths.length - 1 !== i && <svg className={`w-5 h-auto fill-current mx-2  text-gray-400}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>}
                        </li>
                    ))}

                   
                </ul>
            </div>
            {/* <div className="bg-white p-4 flex items-center flex-wrap">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                        </a>

                        <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </li>

                    <li className="inline-flex items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Page 1
                        </a>

                        <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </li>

                    <li className="inline-flex items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            Page 2
                        </a>

                        <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg>
                    </li>

                    <li className="inline-flex items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-500 text-blue-500">
                            Page 3
                        </a>
                    </li>
                </ul>
            </div> */}

        </>
    )
}

export default Breadcrump