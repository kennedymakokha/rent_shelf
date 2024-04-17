/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const SocialComponent = ({ color, title, path }) => {
    return (<div className={`flex sm:w-auto w-8 h-8 sm:p-3 p-1 ${color}  items-center justify-center  sm:rounded-r-full sm:rounded-none rounded-full`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:mr-2 h-3.5 w-3.5 flex items-center  justify-center text-white"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d={path}
            />
        </svg>
        <div className="sm:flex hidden text-white  items-center justify-center font-medium 
                uppercase leading-normal text-white text-[12px]"> {title}</div>
    </div>)
}