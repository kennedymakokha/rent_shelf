/* eslint-disable react/prop-types */

import priceTag from './price.png'
function Pricebadge({ featured, opp, noPrice }) {
    return (
        <>
            <div className={`absolute mx-2 ${featured?.featured ? "-left-[20%]" : "-left-[35%]"} top-[5%] w-full h-12 flex justify-center   px-4 items-center z-10 `}>
                <div className=' gap-x-2 text-slate-100 h-8 px-2 font-bold  uppercase text-sm flex items-center justify-center  '>
                    <div className='px-2 bg-secondary-100 text-[10px] text-slate-100 h-full font-bold  uppercase  flex items-center justify-center  rounded-md  shadow-3xl '>
                        Rent it
                    </div>
                    { featured?.featured && <div className='px-2 bg-primary-100 text-secondary-100 h-full font-bold  uppercase text-[10px] flex items-center justify-center  rounded-md shadow-3xl '>
                        Featured
                    </div>}
                </div>

            </div>
            {!noPrice && <> {featured?.price ? <div className={`absolute  top-6  sm:left-[65%] left-[70%] w-full h-8 ${opp ? "hidden group-hover:flex" : "group-hover:hidden flex"} justify-between px-4 items-center -z-1`}>
                <img src={priceTag} alt='' className='h-[70px]' />
                <div className="absolute sm:right-[67%] right-[72%] w-1/4 h-12    flex-col  flex justify-center  px-4 items-center z-10  ">
                    <span className='text-primary-900 text-sm text-center font-bold'>Ksh</span>
                    <span className='text-primary-900 text-sm text-center font-bold'>{featured?.price}/-</span>
                </div>
            </div> :
                <div className={`absolute top-7  sm:left-[40%] left-[50%] w-full h-8  ${opp ? "hidden group-hover:flex" : "group-hover:hidden flex"}  justify-between px-4 items-center z-10`}>
                    <div className="absolute -left-1 -top-1   flex-col  flex justify-center px-4 items-center z-10  ">
                        <div className=' gap-x-2 text-slate-100 h-8 px-2 font-bold  uppercase text-sm flex items-center justify-center  '>
                            <div className='px-2 bg-primary-100 text-secondary-100 h-full font-bold  uppercase text-[10px] flex items-center justify-center  rounded-md shadow-3xl '>
                                Call for Price
                            </div>
                        </div>
                    </div>
                </div>}
            </>}

        </>
    )
}

export default Pricebadge