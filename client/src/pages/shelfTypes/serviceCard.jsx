import React from 'react'
import Bg from './Bg.jpg'
import Bottom from '../home/featured/components/bottom'

function ServiceCard() {
    return (
        <div className="w-1/4 h-[400px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] relative z-0  p-2 shrink-0">
            <div className='w-full shadow-[inset_-12px_-8px_40px_#46464620] h-full relative z-0 shrink-0' >
                <img src={Bg} alt='' className='h-full w-full' />
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <p className="text-2xl font-bold">This should be on top of the map</p>
                </div>
                <Overlay />
                <ImageContainer />
                <TitleContainer />
                <Bottom />
            </div>

        </div>
    )
}

let v = [1, 2, 3, 4, 5]
export const ImageContainer = () => {
    return (
        <div className="absolute  top-0  h-16 w-1/2 right-0  flex justify-between items-center z-10">
            {v.map((y, i) => (
                <div className={`absolute  top-[25%] bottom-[25%] right-[${i * 5}%]  h-10 w-10 border border-white rounded-full  flex justify-center items-center z-24`}>
                    <img src={Bg} alt="" className="h-full w-full rounded-full object-cover" />
                </div>
            ))}

        </div>

    )

}
const TitleContainer = () => {
    return (
        <div className="absolute   top-0  h-16 w-1/2 left-0  flex justify-center items-center z-10">
            <div className={`absolute text-primary-100 text-[10px] font-bold rounded-md  bg-green-100 opacity-70 top-[25%] bottom-[25%]    w-auto  px-6 shadow-2xl  flex justify-center items-center -z-40`}>
                Kennst
            </div>


        </div>

    )

}

const Overlay = () => {
    return (
        <div className="absolute bg-black opacity-50  inset-0 flex justify-center items-center z-10">

        </div>)
}
export default ServiceCard