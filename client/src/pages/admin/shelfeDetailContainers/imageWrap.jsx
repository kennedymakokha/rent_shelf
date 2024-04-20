/* eslint-disable react/prop-types */


import { Repeat } from '../../../utils/multiple'

import { ImagePlaceHolder } from './items'






function ImageWrap({ details, height }) {
    return (
        <div className="flex flex-rol flex-wrap w-full">

            {details.files.map((file, i) => (
                <div key={i} className='sm:w-1/4 w-full h-[250px] rounded-sm'>
                    <div className='bg-slate-50 w-full h-full rounded-sm'>
                        <img src={file} alt="" className='w-full rounded-sm scale-95 hover:scale-100 ease-in duration-500 rounded-sm h-full object-cover' />
                    </div>
                </div>
            ))}

            {details.files.length < 4 &&
                <div className={`flex  w-full sm:w-${4 - details.files.length}/4 ${height ? height : " h-[250px]"} `}>
                    <div className="w-full h-full gap-x-1 flex">
                        <Repeat count={4 - details.files.length} body={<ImagePlaceHolder details={details} />
                        } />

                    </div>
                </div>
            }
        </div>
    )
}

export default ImageWrap