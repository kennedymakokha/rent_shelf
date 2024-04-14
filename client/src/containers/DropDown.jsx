/* eslint-disable react/prop-types */
export const DropDown = ({ title, array }) => {
    return (
        <div className="px-10 text-[18px]">
            <div className="dropdown  bg-[red] inline-block relative  rounded-full">
                <button className="bg-white text-[gray]  hover:text-[#199e9e] font-semibold py-2 px-4  inline-flex items-center">
                    <span className="mr-1">{title}</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul className="dropdown-menu absolute  w-[100%]  hidden   text-gray-700 pt-1 z-40">
                    {array?.map((arr, i) => (
                        <li className=" bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap" key={i} onClick={arr.onclick}>
                            {arr.title}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}