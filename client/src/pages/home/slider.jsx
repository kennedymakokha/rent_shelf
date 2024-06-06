import { useEffect, useState } from 'react'
import slider from './../../assets/slider1.jpg'
import slider1 from './sliderImages/slider1.jpg'
import slider2 from './sliderImages/slider2.jpg'
// import MyMap from './../../containers/maps/map'
// import MapClust from '../../containers/maps/mapClust.jsx'
// import Clustermap from '../../containers/maps/clustermap'

import MapComponent from '../../containers/maps/cluster1.jsx'
import MapswithDirection from '../../containers/maps/mapswithDirection.jsx'

// eslint-disable-next-line react/prop-types
function Slider({ data }) {
    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useState([
        { state: true, icon: slider, title: "Enough Space for you " },
        { state: false, icon: slider1, title: "warehouse sapce for you" },
        { state: false, icon: slider2, title: "Proximity to your shelf" },
        { state: false, icon: slider1, title: "Instant Support  " }
    ])

    const [active, setactive] = useState(0)
    const next = () => {

        try {
            for (let index = 0; index < items.length; index++) {
                if (index === active) {
                    items[active].state = false
                    items[index + 1].state = true
                    setactive(index + 1)
                }
                else if (items.findIndex(x => x.state === true) === items.length - 1) {
                    items[active].state = false
                    items[0].state = true
                    setactive(0)
                }

            }

        } catch (error) {
            console.log(error)
        }
    }
    const prev = () => {
        try {
            for (let index = 0; index < items.length; index++) {
                if (index === active) {
                    items[active].state = false
                    items[index - 1].state = true
                    setactive(index - 1)
                }

            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setTimeout(function sum() {
            next();
        }, 100)
        // setInterval(console.log("ten"), 1000)
        setTimeout(next(), 100)
    }, [items])

    return (
        <div className="w-full  h-[300px] sm:h-[620px] bg-primary-300 flex justify-center items-center">
            <div className=" w-full h-full relative z-0">
                <img src={items[active].icon} alt='' className='sm:h-[620px] h-full sm:flex hidden w-full  sm:object-cover object-contain' />
                <div className=
                    {`absolute right-[5%] left-[5%]  top-[15%]  sm:top-[85%] sm:mx-20 mx-2 flex justify-center items-center z-20`}>
                    {/* <div className='sm:bg-[#199e9e] h-20 px-8 flex item-center justify-center flex-col rounded-md '> */}
                    <p className="text-xl  px-1 rounded-md sm:text-center sm:text-2xl text-white sm:text-slate-100 sm:font-semibold font-bold"><span>{items[active]?.title}</span>

                    </p>
                    {/* </div> */}

                </div>
                <div className="absolute top-[25%] bottom-[25%]   sm:mx-20 w-[100%] sm:w-[90%] flex  justify-between items-center z-20">
                    <div onClick={() => prev()} className='bg-primary-1000 h-10 w-10 rounded-full px-2 flex item-center justify-center flex-col '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold text-secondary-1000">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    <div onClick={() => next()} className='bg-primary-700 h-10 w-10 rounded-full px-2 flex item-center justify-center flex-col '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold text-secondary-1000">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>

                <div className="absolute  bottom-[5%] left-[25%]  space-x-2 right-[25%] mx-20 flex justify-center items-center z-10">
                    {items.map((item, i) => (
                        <span key={i} className={`${item.state === true ? 'bg-secondary-1000 sm:w-3 sm:h-3 h-1 w-1 rounded-full border border-2 border-white' : 'bg-primary-1000  sm:w-3 sm:h-3 h-1 w-1 rounded-full'}`}></span>
                    ))}
                </div>
                {data !== undefined && data && <div className="absolute rounded-md  w-full sm:w-1/2 sm:h-3/4 h-full  top:0 sm:top-[15%] right:0 sm:right-[2%]  mx-0 flex justify-center items-center z-40">
                    <MapComponent data={data} />
                </div>}
                <div className="absolute  inset-0  bg-gradient-to-t from-primary-100  mx-0 flex justify-center  items-center -z-5">

                </div>
            </div>
        </div>

    )
}


export default Slider