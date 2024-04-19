/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Contents from "../home/contents";
import Bg from './../../assets/aboutbg.jpg'
import g from './../../assets/about.gif'
import Team from "./components/Team";
// import { useEffect, useState } from "react";
import Stats from "./components/statics";
let paths =
    [
        { title: "About-us", path: 'About-us' },
        // { title:"hOME", path: `About-us/${data?.name?.replace(/\s+/g, "-").toLowerCase()}` }
    ]
const CheckItem = ({ title }) => {


    return (
        <div className="w-1/2 flex  ">
            <div className="w-full h-6  gap-x-2 px-1 flex items-center">
                <div className="w-6 h-6 bg-primary-100 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4.5" stroke="currentColor" className="w-4 h-4 text-secondary-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div className=" flex items-center justify-center text-slate-400 ">{title}</div>

            </div>
        </div>
    )
}

function index() {
    // const [time, setTime] = useState(0);
    // const [id, setid] = useState(1);
    // // const [item, setItem] = useState({});
    // const [state, setState] = useState({
    //     todos:
    //         [
    //             {
    //                 id: 1,
    //                 title: 'take out trash',
    //                 done: false
    //             },
    //             {
    //                 id: 2,
    //                 title: 'wife to dinner',
    //                 done: false
    //             },
    //             {
    //                 id: 3,
    //                 title: 'make react app',
    //                 done: false
    //             },
    //         ]
    // })
    // const toggleDone = () => {


    //     // loop over the todos list and find the provided id.
    //     let updatedList = state.todos.map(item => {
    //         if (item.id == id) {
    //             setid(prevState => prevState + 1)
    //             // setItem()
    //             return { ...item, done: true }; //gets everything that was already in item, and updates "done"
    //         }

    //         return item; // else return unmodified item 
    //     });

    //     setState({ todos: updatedList }); // set state to new object with updated list
    // }
    // useEffect(() => {
    //     const timer = window.setInterval(() => {
    //         // setTime(prevTime => prevTime + 1); // <-- Change this line!
    //         toggleDone()
    //     }, 1000);
    //     return () => {
    //         window.clearInterval(timer);
    //     };
    // }, []);
    // console.log(state.todos.filter(e => e.done === true))
    return (<>
        <Contents backDrop={Bg} title="About-us" path={paths} bg="bg-slate-200">
            <div className="flex w-full  flex-col">
                <div className="flex w-full h-[400px]">
                    <div className="bg-gray-400 w-1/4 sm:flex hidden border rounded-md h-full relative z-10">
                        <img src={g} alt="" className="w-full h-full " />
                        <div className="absolute flex-col rounded-full  shadow-2xl border-secondary-100 border bottom-5 -right-[15%] bg-primary-100 h-[100px] w-[100px] items-center justify-center sm:flex hidden justify-center items-center z-10">
                            <span className="text-secondary-900 font-bold text-[18px]">Happy</span>
                            <span className="text-secondary-100 font-bold text-[18px]">204K +</span>
                        </div>
                    </div>
                    <div className=" w-3/4  mx-10 h-full flex-col px-2 flex relative -z-1">
                        <div className="w-full h-4 mt-2 pb-10 flex items-center justify-center ">
                            <h2 className="text-center sm:text-[34px] text-[18px] underline font-bold text-secondary-100">We get <span className="text-primary-100   italic ">space</span> to your <span className="text-primary-100   italic ">doorstep</span> </h2>
                        </div>
                        <p className=" text-slate-400 text-jusify">Rent shelf Are A space  Services Provider Institutions. Suitable For providing rental space around the world, our firm also offer consultations concerning suitability of a business and it's location.</p>
                        <p className=" text-slate-400 text-jusify">Rent shelf Are A space  Services Provider Institutions. Suitable For providing rental space around the world, our firm also offer consultations concerning suitability of a business and it's location.</p>
                        <div className="w-full  flex my-2">
                            <div className="w-full flex sm:flex-row flex-col ">
                                <div className="h-full sm:w-1/2 w-full">
                                    <div className="h-full w-full gap-y-8 flex flex-wrap">
                                        <CheckItem title="Great Support" />
                                        <CheckItem title="Amazing People" />
                                        <CheckItem title="Customers First" />
                                        <CheckItem title="And More ..." />
                                    </div>
                                </div>
                                <div className="h-full w-1/2 ">
                                    {/* {todos.filter(e=>)} */}
                                </div>

                            </div>
                        </div>
                        <div className="w-full  flex sm:mt-20">
                            <div className="w-full flex flex-row ">
                                <div className="h-full sm:w-1/2  flex items-center justify-center">
                                    <div className="h-full w-1/2 text-[18px] font-bold text-white shadow-3xl rounded-md px-2 flex items-center justify-center bg-secondary-100 ">
                                        More About Us
                                    </div>
                                </div>
                                <div className="h-full sm:w-1/2  flex items-center justify-center">
                                    <div className="h-full w-1/2 text-[18px] font-bold text-white shadow-3xl rounded-md px-2 flex items-center justify-center  ">
                                        More About Us
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Contents>
        <Team />
        <Stats />
        <Contents bg="bg-slate-300"></Contents>
    </>
    );
}

export default index;