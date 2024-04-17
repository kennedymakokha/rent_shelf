export default function Card() {
    return (
        <div >
            <div className="sm:h-52 sm:ml-48 ml-[2%] sm:float-left  min-h-[210px]
                            sm:-mt-24 -mt-4 sm:w-96 w-[96%] flex-col 
                            rounded-xl bg-white bg-clip-border 
                            text-slate-500 shadow-2xl">
                <div className="p-6">
                    <h5 className="text-center mr-4 mb-2 
                                   block sm:text-[18px] text-[17px] text-xl 
                                   font-semibold text-blue-gray-900 
                                   antialiased">
                        Reach Us
                    </h5>
                    <ul>
                        <li className="sm:mt-2 sm:text-[18px] text-[18px]">
                            <span><i className="fa fa-phone mr-2"></i> </span>
                            +254728249001
                        </li>
                        <li className="sm:mt-2 sm:text-[18px] text-[18px]">
                            <span><i className="fa fa-envelope mr-2"></i> </span>
                            <span>info@rentshelf.com</span>
                        </li>
                        <li className="sm:mt-2 sm:text-[18px] text-[18px]">
                            <span><i className="fa-solid fa-map-pin mr-2"></i>
                            </span>
                            Uganda Hse, 4th Floor,
                            <span className="pl-4">
                                Kimathi Street
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" mr-36 w-96 sm:flex hidden text-center float-right min-h-[210px]
                         -mt-24 w-1/3 flex-col rounded-xl 
                         bg-white text-slate-500 shadow-2xl">
                <div className="p-6 ">
                    <h5 className="mb-2 block text-[18px] 
                                   text-xl font-semibold 
                                   text-blue-gray-900 antialiased">
                        Support and Mantainance
                    </h5>
                    <i className="fa fa-handshake fa-2xl"></i>
                    <div className="text-left mt-4">
                        <span><i className="fa fa-envelope mr-2"></i> </span>
                        <span className="text-[18px]">+25428249001</span>
                    </div>
                    <div className="text-left mt-4">
                        <span><i className="fa fa-envelope mr-2"></i> </span>
                        <span className="text-[18px]">support@rentshelf.com</span>
                    </div>
                    <div className="mt-2 text-left">
                        <span className="text-[18px]"><i className="fa-solid fa-map-pin mr-2"></i>  </span>
                        Uganda Hse, 4th Floor,
                        <span className="pl-4 text-[18px]">
                            Kimathi Street
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}